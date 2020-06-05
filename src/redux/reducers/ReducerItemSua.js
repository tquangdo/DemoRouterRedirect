import * as actionTypes from '../constants/ActionTypes'

var reducerItemSua = (state = null, action) => {
    switch (action.type) {
        case actionTypes.RESET_SUA:
            return null
        case actionTypes.CLICK_SUA:
            return action.task_arg
        default:
            return state
    }
}

export default reducerItemSua