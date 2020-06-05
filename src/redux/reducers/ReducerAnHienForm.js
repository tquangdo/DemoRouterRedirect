import * as actionTypes from '../constants/ActionTypes'

var reducerAnHienForm = (state = false, action) => {
    switch (action.type) {
        case actionTypes.AN_HIEN_FORM:
            return !state
        case actionTypes.HIEN_FORM:
            return true
        default:
            return state
    }
}

export default reducerAnHienForm