import * as actionTypes from '../constants/ActionTypes'
import mock_list_items from '../../mocks/mockListItems'
import { reject, remove } from 'lodash' // https://lodash.com/
var { uuid } = require("uuidv4")

var dataLocalStorage = JSON.parse(localStorage.getItem('mangItems'))
var orginState = dataLocalStorage ? dataLocalStorage : mock_list_items
var reducerItems = (state = orginState, action) => {
    let stateTmp = [...state]
    switch (action.type) {
        case actionTypes.CLICK_THEMSUA:
            let uid_tmp = ''
            if (action.task_themsua_arg.uid !== '') { // Sửa
                stateTmp = reject(stateTmp, { uid: action.task_themsua_arg.uid })// (lodash)
                uid_tmp = action.task_themsua_arg.uid
            } else { // Thêm
                uid_tmp = uuid()
            }
            let newTask = {
                uid: uid_tmp,
                name: action.task_themsua_arg.name, // "task_themsua_arg" phai map voi "Action.js"
                level: +action.task_themsua_arg.level // convert string->int
            }
            stateTmp.push(newTask)
            localStorage.setItem('mangItems', JSON.stringify(stateTmp))
            break
        case actionTypes.CLICK_XOA:
            remove(stateTmp, (item) => {// (lodash)
                return (item.uid === action.uid_arg)
            })
            localStorage.setItem('mangItems', JSON.stringify(stateTmp))
            break
        case actionTypes.RESET_MANG:
            return orginState
        default:
    }
    return stateTmp
}

export default reducerItems