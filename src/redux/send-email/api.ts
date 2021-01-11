import Http from 'axios'
import { SERVER_HOST } from '../../utils/constants'
import { ISendEmailState } from './interfaces'
export const sendEmail = ({params}: any) => {
	return Http({
		method: 'POST',
		url: `${SERVER_HOST}`,
		data: params
	}).then(resp => {
		return resp.data as ISendEmailState
	})
}