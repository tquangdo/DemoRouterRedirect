import React from 'react'
//Redux
import { connect } from 'react-redux'
import { actionOnClickThemSua, actionAnHienForm } from '../../redux/actions/Action'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      task_uid: "", // KO phải là null
      task_name: "",
      task_level: 0
    }
  }
  submitForm = (event) => { // type=<form> nên phải có handleChange(event)
    if (this.state.task_name === '') {
      alert("KHÔNG được để trống tên task!!!")
    } else {
      var jsonItem = {
        uid: this.state.task_uid,
        name: this.state.task_name,
        level: this.state.task_level
      }
      // Thêm OR Sửa
      let { dispatch } = this.props
      dispatch(actionOnClickThemSua(jsonItem))
      dispatch(actionAnHienForm()) // bắt buộc phải có để phân biệt Thêm & Sửa
      // nếu ko đóng Form lại thì KO thể phân biệt Form.handleChange() giữa Thêm & Sửa
    }
    event.preventDefault()// cái này để sau khi submitForm() thì stop luôn KO chạy nữa (đặc biệt cho TH alert())
  }
  handleChange = (event) => {
    // event.target gồm 4 loại: input + select + checkbox + radio
    var name = event.target.name
    var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    this.setState({ [name]: value })// map với:
    // [name] = [<input> là task_name & <select> là task_level]
    // value = <input> là this.state.task_name & <select> là this.state.task_level
  }
  UNSAFE_componentWillMount() {
    this.componentWillMountWillReceive(this.props.reduxprop_itemSua)
  }
  componentWillMountWillReceive(prop_arg) {
    if (prop_arg !== null) {
      this.setState({// KO được gom lại chung: this.setState(prop_arg)
        task_uid: prop_arg.uid,
        task_name: prop_arg.name,
        task_level: prop_arg.level
      })
    }
  }
  UNSAFE_componentWillReceiveProps(next_props) {
    this.componentWillMountWillReceive(next_props.reduxprop_itemSua)
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-offset-7 col-md-5">
          <form onSubmit={this.submitForm} className="form-inline">
            <div className="form-group">
              <input name="task_name" type="text" className="form-control"
                value={this.state.task_name} onChange={this.handleChange}
                placeholder="Nhập task name..." />
            </div>
            <div className="form-group">
              <select name="task_level" className="form-control"
                value={this.state.task_level} onChange={this.handleChange}
                required="required">
                <option value={0}>Thấp</option>
                <option value={1}>Vừa</option>
                <option value={2}>Cao</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">{this.props.reduxprop_txtThemSua} </button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    reduxprop_itemSua: state.reducerItemSua,
    reduxprop_txtThemSua: state.reducerTxtThemSua
  }
})(Form)
