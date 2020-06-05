import { createStore } from 'redux'
import { actionStatus, actionSort } from './actions/Action'
import myReducer from './reducers/Reducer'

var storeReducer = createStore(myReducer)
storeReducer.dispatch(actionStatus()) //*** STORE & DISPATCH(MW⇔API)
// giải thích flow xử lí:
//     if (action.type === 'DAO_STATUS') { //***  ACTION
//         state.status = !state.status //*** REDUCER change STATE > PROVIDER > change VIEW(Components)
//     }
console.log("3: ", storeReducer.getState())
