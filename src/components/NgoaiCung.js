import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import '../NgoaiCung.css'
import SanPhamList from './SanPhamList'
import LienHe from './LienHe'
import TrangChu from './TrangChu'

let isAuthenGlobal = false
function RouteCaNhan({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenGlobal ? ( // nếu authen rồi thì move to "/sanphamlist", unless redirect to "/login" with nguồn là "/sanphamlist"
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

// component <LoginX> call hàm onAuthen() of sibling component <AuthenButton>
// function onAuthen(cb) {
//   this.setState({ is_authen: true })
//   setTimeout(cb, 100)
// }
// class AuthenButton extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { is_authen: isAuthenGlobal }
//     onAuthen = onAuthen.bind(this)
//   }
//   signOut = (cb) => {
//     this.setState({ is_authen: false })
//     isAuthenGlobal = this.state.is_authen
//     setTimeout(cb, 100)
//   }
//   render() {
//     isAuthenGlobal = this.state.is_authen
//     return (
//       this.state.is_authen ? (
//         <p>
//           Chào mừng đã log in!{" "}
//           <button
//             onClick={() => {
//               this.signOut(() => alert('Đã đăng xuất OK!'))
//             }}
//           >Sign out
//       </button>
//         </p>
//       ) : (
//           <p>Chưa login!!!</p>
//         )
//     )
//   }
// }


function AuthenButton() {
  let history = useHistory() // Hooks can only be called inside of the body of a function component
  const [is_authen, setIsAuthen] = useState(false)
  let onAuthen = (cb) => {
    setIsAuthen(true)
    setTimeout(cb, 100)
  }
  let signOut = (cb) => {
    setIsAuthen(false)
    setTimeout(cb, 100)
  }
  return (
    is_authen ? (
      <p>
        Chào mừng đã log in!{" "}
        <button
          onClick={() => {
            isAuthenGlobal = false
            signOut(() => history.push("/"))
          }}
        >Sign out
      </button>
      </p>
    ) : (
        <p>
          Chưa login!!! &nbsp;
          <button
            onClick={() => {
              isAuthenGlobal = true
              onAuthen(() => history.push("/sanphamlist"))
            }}
          >Log in
          </button>
        </p>
      )
  )
}

function LoginX() {
  // component <LoginX> call hàm onAuthen() of sibling component <AuthenButton>
  // let history = useHistory() // hooks
  // let location = useLocation()
  // let { from } = location.state || { from: { pathname: "/" } } // from là nguồn("/sanphamlist" || "/") redirect tới Login
  // let login = () => {
  //   onAuthen(() => { // sau 100ms sẽ callback > chạy xử lí này!
  //     history.replace(from) // click "Login" sẽ redirect sang from ("/sanphamlist")
  //   })
  // }
  return (
    <div>
      <h1>You must log in</h1>
      {/* <button onClick={login}>Log in</button> */}
    </div>
  )
}

class NgoaiCung extends React.Component {
  render() {
    return (
      <Router>
        <div className="DoTQApp" >
          <AuthenButton />
          <ul>
            <li>
              <Link to="/lienhe">Liên hệ</Link>
            </li>
            <li>
              <Link to="/sanphamlist">Sản phẩm</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <TrangChu />
            </Route>
            <Route path="/lienhe">
              <LienHe />
            </Route>
            <Route path="/login">
              <LoginX />
            </Route>
            <RouteCaNhan path="/sanphamlist">
              <SanPhamList />
            </RouteCaNhan>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default NgoaiCung
