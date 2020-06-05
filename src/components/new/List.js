import React from 'react'
import ListItem from './ListItem'
import {
  filter, includes, orderBy as funcOrderBy
} from 'lodash' // https://lodash.com/
//Redux
import { connect } from 'react-redux'

class List extends React.Component {
  render() {
    let { reduxprop_items } = this.props
    // Tìm kiếm (lodash)
    reduxprop_items = filter(reduxprop_items, (item) => {
      return includes(item.name.toLowerCase(), this.props.reduxprop_tim.toLowerCase())
    })
    // Xếp theo (lodash)
    reduxprop_items = funcOrderBy(reduxprop_items, [this.props.reduxprop_sapxep.orderBy],
      [this.props.reduxprop_sapxep.orderDir])
    var elm_mangmuccons = reduxprop_items.map((item, chiso) => {
      return (<ListItem key={chiso} chiso={chiso} item={item}
      ></ListItem>)
    })
    return (
      <div className="panel panel-success">
        <div className="panel-heading">List Tasks</div>
        <table className="table table-hover ">
          <thead>
            <tr>
              <th style={{ width: '10%' }} className="text-center">#</th>
              <th>NAME</th>
              <th style={{ width: '20%' }} className="text-center">LEVEL</th>
              <th style={{ width: '20%' }}>Chỉnh sửa</th>
            </tr>
          </thead>
          <tbody>
            {elm_mangmuccons}
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    reduxprop_items: state.reducerItems,
    reduxprop_tim: state.reducerTim,
    reduxprop_sapxep: state.reducerSapXep
  }
})(List)

