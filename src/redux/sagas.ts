import {all} from 'redux-saga/effects'
import SendEmailSaga from './send-email/saga'
// import all saga here
export default function * () {
  yield all([
    SendEmailSaga()
    // put it here
  ])
}