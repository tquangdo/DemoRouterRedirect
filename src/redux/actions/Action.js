import * as actionTypes from './../constants/ActionTypes'

// reducerAnHienForm
var actionAnHienForm = () => {
    return { type: actionTypes.AN_HIEN_FORM }
}
var actionHienForm = () => {
    return { type: actionTypes.HIEN_FORM }
}
// reducerItems
var actionOnClickThemSua = (task_themsua_arg) => {
    return {
        type: actionTypes.CLICK_THEMSUA,
        task_themsua_arg
    }
}
var actionOnClickXoa = (uid_arg) => {
    return {
        type: actionTypes.CLICK_XOA,
        uid_arg
    }
}
var actionResetMang = () => {
    return {
        type: actionTypes.RESET_MANG
    }
}
// reducerItemSua
var actionOnClickSua = (task_arg) => {
    return {
        type: actionTypes.CLICK_SUA,
        task_arg
    }
}
var actionResetItemSua = () => {
    return {
        type: actionTypes.RESET_SUA
    }
}
// reducerTxtThemSua
var actionTxtThemSua = (kw_arg) => {
    return {
        type: actionTypes.CLICK_TXT_THEMSUA,
        kw_arg
    }
}
// reducerTim
var actionTim = (kw_arg) => {
    return {
        type: actionTypes.CLICK_TIM,
        kw_arg
    }
}
// reducerSapXep
var actionSapXep = (json_arg) => {
    return {
        type: actionTypes.CLICK_SAPXEP,
        json_arg
    }
}

export {
    actionAnHienForm, actionOnClickThemSua, actionOnClickXoa,
    actionTxtThemSua, actionOnClickSua, actionResetItemSua, actionTim,
    actionSapXep, actionResetMang, actionHienForm
}
