import * as actionTypes from '../constants/ActionTypes'

var reducerTim = (state = '', action) => {
    switch (action.type) {
        case actionTypes.CLICK_TIM:
            return action.kw_arg
        default:
            return state
    }
}

export default reducerTim