import * as actionTypes from '../constants/ActionTypes'

var reducerTxtThemSua = (state = 'Thêm', action) => {
    switch (action.type) {
        case actionTypes.CLICK_TXT_THEMSUA:
            return action.kw_arg
        default:
            return state
    }
}

export default reducerTxtThemSua