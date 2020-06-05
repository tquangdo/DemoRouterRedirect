import React from 'react'
import { Route, Link } from 'react-router-dom'
import { menu_list_items } from '../mocks/mockListItems'

const DoTQLink = ({ label, to, exact }) => {
  return (
    <Route path={to} exact={exact} children={({ match }) => {
      var active_var = match ? 'active' : ''
      return (
        // <li className={`my-li ${active_var}`} >
        <li className={`${active_var}`} >
          <Link to={to}>{label}</Link>
        </li>
      )
    }}
    ></Route>
  )
}
class Menu extends React.Component {
  hienMenu = (menu_list_items_arg) => {
    let kqTraVe = null
    if (menu_list_items_arg.length > 0) {
      kqTraVe = menu_list_items_arg.map((item, chiso) => {
        return (
          <DoTQLink key={chiso} label={item.label} to={item.to} exact={item.exact} ></DoTQLink>
          // <li key={chiso}>
          //   <NavLink to={item.to} exact={item.exact} >{item.label} </NavLink>
          // </li>
        )
      })
    }
    return kqTraVe
  }
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <ul className="nav navbar-nav">
          {this.hienMenu(menu_list_items)}
        </ul>
      </nav>
    )
  }
}

export default Menu
