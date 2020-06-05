import React from 'react'
import TrangChu from "../components/TrangChu"
import LienHe from "../components/LienHe"
import NotFound from "../components/NotFound"
import SanPhamList from "../components/SanPhamList"
import SanPham from '../components/SanPham'
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
        path: "/sanphamlist/:param_id",
        exact: false,
        component: ({ match }) => <SanPham matchObj={match} /> // PHẢI là ({match}) chứ KO phải (match)
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
    },
    // PHẢI để <NotFound> sau cùng, nếu ko dù exact=true vẫn NG!!!
    {
        path: "",
        exact: false,
        component: () => <NotFound />
    }
]

export { menu_list_items, route_items, sanpham_list_items, sanpham_detail_items }