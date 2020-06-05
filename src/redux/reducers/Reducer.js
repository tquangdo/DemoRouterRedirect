import { combineReducers } from 'redux'
import reducerItems from './ReducerItems'
import reducerItemSua from './ReducerItemSua'
import reducerAnHienForm from './ReducerAnHienForm'
import reducerTim from './ReducerTim'
import reducerSapXep from './ReducerSapXep'
import reducerTxtThemSua from './ReducerTxtThemSua'

var myReducer = combineReducers({
    reducerItems,
    reducerItemSua,
    reducerAnHienForm,
    reducerTim,
    reducerSapXep,
    reducerTxtThemSua
})

export default myReducer
