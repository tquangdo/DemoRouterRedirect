import React from 'react'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      txtUsername: '',
      txtPW: '',
      is_redir: false
    }
  }
  onSubmitForm = (e) => {
    e.preventDefault()
    let { txtUsername, txtPW } = this.state
    if (txtUsername === 'admin' && txtPW === 'admin') {
      this.setState({ is_redir: true })
    } else {
      alert('Sai thông tin đăng nhập!!!')
    }
  }
  onChangeInput = (e) => {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }
  render() {
    let { txtUsername, txtPW } = this.state
    let { locationObj } = this.props
    if (this.state.is_redir) {
      return <Redirect to={{
        pathname: "/sanphamlist",
        state: { from: locationObj }
      }} />
    }
    return (
      <div className="CanhTraiCSS">
        <form onSubmit={this.onSubmitForm}>
          <legend>Đăng nhập</legend>

          <div className="form-group">
            <label>Username:</label>
            <input type="text" className="form-control"
              name="txtUsername"
              value={txtUsername}
              onChange={this.onChangeInput}
              placeholder="Nhập username..." />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control"
              name="txtPW"
              value={txtPW}
              onChange={this.onChangeInput}
              placeholder="Nhập password..." />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default Login
