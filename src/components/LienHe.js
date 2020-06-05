import React from 'react'
import { Prompt } from 'react-router-dom'

class LienHe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHien: false
    }
  }
  onChangeRadio = (event) => {
    let { value } = event.target
    if (value === "hien") {
      this.setState({ isHien: true })
    } else {
      this.setState({ isHien: false })
    }
  }
  render() {
    return (
      <div>
        <h1>Đây là trang Liên hệ</h1>
        <form>
          <input type="radio" name="capQuyen" defaultChecked value="koHien" onChange={this.onChangeRadio} />KO hiện prompt &nbsp;&nbsp;
          <input type="radio" name="capQuyen" value="hien" onChange={this.onChangeRadio} />Hiện prompt
      </form>
        <Prompt
          when={this.state.isHien}
          message={location => (`Nếu đi đến [${location.pathname}] thì sẽ mất data hiện tại có OK ko?`)}
        />
      </div>
    )
  }
}

export default LienHe
