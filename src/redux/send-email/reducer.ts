import * as actionTypes from './action-types'
import { DEFAULT_REDUCER_STATUSES } from '../../utils/constants'
import { ISendEmailState, IMailerReducer } from './interfaces'
const initialState:ISendEmailState = {
  data: {
    _id: '',
    senderEmail: '',
    senderName: '',
    recipients: '',
    createdAt: 0,
    updatedAt: 0,
  },
  status: DEFAULT_REDUCER_STATUSES.IDLE,
  error: null,
  retry: 0
}
export const sendEmailReducer = (state = initialState, actions: IMailerReducer): ISendEmailState => {
  const {type, payload, error} = actions
  switch (type) {
    case actionTypes.SEND_EMAIL_FAILED:
      return {
        ...state,
        status: DEFAULT_REDUCER_STATUSES.FETCHING,
        retry: state.retry + 1
      }
    case actionTypes.SEND_EMAIL_SUCCEED:
      return {
        ...state,
        data: payload,
        status: DEFAULT_REDUCER_STATUSES.FETCHED
      }
    case actionTypes.SEND_EMAIL_FAILED:
      return {
        ...state,
        error,
        status: DEFAULT_REDUCER_STATUSES.FAILED
      }
    default:
      return state
  }
}
