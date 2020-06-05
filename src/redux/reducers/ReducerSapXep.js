import * as actionTypes from '../constants/ActionTypes'

let stateGoc = {
    orderBy: 'name',
    orderDir: 'asc'
}
let reducerSapXep = (state = stateGoc, action) => {
    switch (action.type) {
        case actionTypes.CLICK_SAPXEP:
            return { // TH state là JSON bắt buộc phải return kiểu này (pure func),
                //KO được gán state.orderBy / orderDir =...
                orderBy: action.json_arg.orderBy,
                orderDir: action.json_arg.orderDir
            }
        default:
            return state
    }
}

export default reducerSapXep