import React from 'react'
import TrangChu from "../components/TrangChu"
import LienHe from "../components/LienHe"
import SanPhamList from "../components/SanPhamList"
import Login from '../components/Login'

var sanpham_list_items = [
    {
        id: 1,
        name: "Iphone X"
    },
    {
        id: 2,
        name: "Samsung S7"
    }
]
var sanpham_detail_items = [
    {
        id: 1,
        name: "Iphone X",
        detail: "Iphone X ios 16.2.3 64GB",
        price: 500
    },
    {
        id: 2,
        name: "Samsung S7",
        detail: "Samsung S7 android 16.2.3 32GB",
        price: 480
    }
]
var menu_list_items = [
    {
        label: "Trang chủ",
        to: "/",
        exact: true
    },
    {
        label: "Sản phẩm",
        to: "/sanphamlist",
        exact: false
    },
    {
        label: "Đăng nhập",
        to: "/login",
        exact: false
    },
    {
        label: "Liên hệ",
        to: "/lienhe",
        exact: false
    }
]
var route_items = [
    {
        path: "/",
        exact: true,
        component: () => <TrangChu />
    },
    {
        path: "/lienhe",
        exact: false,
        component: () => <LienHe />
    },
    {
        path: "/login",
        exact: false,
        component: ({ location }) => <Login locationObj={location} />
    },
    {
        path: "/sanphamlist",
        exact: false,
        component: ({ match, location }) => <SanPhamList matchObj={match} locationObj={location} />
    }
]

export { menu_list_items, route_items, sanpham_list_items, sanpham_detail_items }