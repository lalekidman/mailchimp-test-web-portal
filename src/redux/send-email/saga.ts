import {put, all, call, takeLatest} from 'redux-saga/effects'
import * as actionTypes from './action-types'
import {sendEmail} from './api'
function * sendEmailWorker (data: any) {
  try {
    const res = yield call(sendEmail as any, data)
    yield put ({
      type: actionTypes.SEND_EMAIL_SUCCEED,
      data: res
    })
  } catch (err) {
    yield put({
      type: actionTypes.SEND_EMAIL_FAILED,
      error: err.message
    })
  }
}
export default function * () {
  yield all([
      takeLatest(actionTypes.SEND_EMAIL_PENDING, sendEmailWorker),
    ])
  }
  