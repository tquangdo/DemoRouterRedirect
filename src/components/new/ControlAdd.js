import React from 'react'
import { connect } from 'react-redux'
import {
  actionAnHienForm, actionResetItemSua, actionTxtThemSua
} from '../../redux/actions/Action'

class ControlAdd extends React.Component {
  anHienForm() {
    let { dispatch } = this.props
    dispatch(actionTxtThemSua("Thêm"))
    dispatch(actionAnHienForm())
    dispatch(actionResetItemSua())
  }
  render() {
    let domAnHien = null
    if (this.props.reduxprop_anHienForm) {
      domAnHien = (<i>Ẩn mục thêm task</i>)
    } else {
      domAnHien = (<i>Hiện mục thêm task</i>)
    }
    return (
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button type="button" className="btn btn-info btn-block" onClick={() => this.anHienForm()} >{domAnHien} </button>
      </div>
    )
  }
}
export default connect((state) => {
  return {
    reduxprop_anHienForm: state.reducerAnHienForm
  }
})(ControlAdd)
