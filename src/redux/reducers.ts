import {combineReducers} from 'redux'
import {sendEmailReducer} from './send-email/reducer'
export default combineReducers({
    mail: sendEmailReducer
})