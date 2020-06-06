import React from 'react'
import { sanpham_list_items } from '../mocks/mockListItems'
// import { NavLink } from 'react-router-dom'

class SanPhamList extends React.Component {
  render() {
    let kqTrave = sanpham_list_items.map((item, chiso) => {
      return (
        // Chạy code Redirect nên cmt out
        // <NavLink key={chiso} to={`${this.props.matchObj.url}/${item.id}`}>
        <li key={chiso} className="list-group-item">
          {item.id}) {item.name}
        </li>
        // Chạy code Redirect nên cmt out
        // </NavLink>
      )
    })
    // Chạy code Redirect nên cmt out
    // let { state } = this.props.locationObj
    // if (typeof state !== 'undefined') {
    //   alert('Được redirect từ: ' + state.from.pathname)
    // }
    return (
      <div>
        <h1>Danh sách sản phẩm</h1>
        <div className="row">
          <ul className="list-group">
            {kqTrave}
          </ul>
        </div>
      </div>
    )
  }
}

export default SanPhamList
