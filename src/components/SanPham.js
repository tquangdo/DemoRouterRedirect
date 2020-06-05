import React from 'react'
import { sanpham_detail_items } from '../mocks/mockListItems'

class SanPham extends React.Component {
  hienNoiDung = (param_id_arg) => {
    let domTraVe = null
    if (param_id_arg > sanpham_detail_items.length) {
      alert('NG!!!')
    } else {
      domTraVe = (
        <tr>
          <td>{sanpham_detail_items[param_id_arg - 1].name} </td>
          <td>{sanpham_detail_items[param_id_arg - 1].detail} </td>
          <td>{sanpham_detail_items[param_id_arg - 1].price}$ </td>
        </tr>
      )
    }
    return domTraVe
  }
  render() {
    let { param_id } = this.props.matchObj.params
    return (
      <div>
        <h1>
          Chi tiết về sản phẩm
      </h1>
        <table className="table table-bordered table-hover">
          <thead>
            <tr className="danger">
              <th>Tên</th>
              <th>Chi tiết</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody className="CanhTraiCSS">
            {this.hienNoiDung(param_id)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default SanPham