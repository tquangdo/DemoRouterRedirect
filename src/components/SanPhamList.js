import React from 'react'
import { sanpham_list_items } from '../mocks/mockListItems'
import { NavLink } from 'react-router-dom'

class SanPhamList extends React.Component {
  render() {
    let kqTrave = sanpham_list_items.map((item, chiso) => {
      return (
        <NavLink key={chiso} to={`${this.props.matchObj.url}/${item.id}`}>
          <li className="list-group-item">
            {item.id}) {item.name}
          </li>
        </NavLink>
      )
    })
    let { state } = this.props.locationObj
    if (typeof state !== 'undefined') {
      alert('Được redirect từ: ' + state.from.pathname)
    }
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
