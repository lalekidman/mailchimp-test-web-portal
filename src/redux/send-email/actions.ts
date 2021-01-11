import * as actionTypes from './action-types'
import { IEmailBody } from './interfaces'
export const sendEmail = (params: IEmailBody) => ({type: actionTypes.SEND_EMAIL_PENDING, params: params})