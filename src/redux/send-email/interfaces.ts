import { IDEFAULT_REDUCER_STATUSES } from "../../utils/interfaces";
import * as actionTypes from './action-types'
export interface IFetchOrderListActions {
  type: string
}
export type ISendEmailState  = {
  data: IEmail
  status: IDEFAULT_REDUCER_STATUSES
  error: string|null
  retry: number
}
export type IEmailBody = {
  senderName: string
  senderEmail: string
  recipients: string
}

export type IEmail = IEmailBody & {
  _id: string
  updatedAt: number
  createdAt: number
}
export type IMailerReducer = {
  payload: any
  error?: any,
  type: keyof typeof actionTypes
}