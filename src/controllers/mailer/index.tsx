import React from 'react'
import {bindActionCreators} from 'redux'
import {sendEmail} from '../../redux/send-email/actions'
import {connect} from 'react-redux'
import { AppState } from '../../store-redux'

import {
  Button,
  TextField
} from '@material-ui/core'
import { IEmailBody, IMailerReducer } from '../../redux/send-email/interfaces'
import { DEFAULT_REDUCER_STATUSES } from '../../utils/constants'

interface IComponentState {
  emailData: IEmailBody
}
interface HomeProps {
  order?: any
}

interface  IMapStateToProps extends AppState {
}
interface IMapDispatchToProps {
  sendEmail: (params: IEmailBody) => void
}
// type IProps = IMapDispatchToProps
type IProps = IMapDispatchToProps & IMapStateToProps & {
  mail: IMailerReducer
}
class ContainerComponent extends React.Component<IProps, IComponentState> {
  public state = {
    emailData: {
      senderName: '',
      senderEmail: '',
      recipients: '',
    }
  }
  constructor (props: any) {
      super(props)
      this.handleSendEmail = this.handleSendEmail.bind(this)
      this.handleFormData = this.handleFormData.bind(this)
  }
  protected handleSendEmailResponse ({mail}: IProps) {
    if (this.props.mail.status !== mail.status) {
      if (mail.status === DEFAULT_REDUCER_STATUSES.FETCHED) {
        alert('success sending email')
        console.log(' >>. fetched data ', mail)
      } else if (mail.status === DEFAULT_REDUCER_STATUSES.FETCHING) {
        console.log(' >>. fetching order list...')
      } else if (mail.status === DEFAULT_REDUCER_STATUSES.FAILED) {
        alert('failed sending email')
      }
    }
  }
  protected handleSendEmail = () => {
    const {emailData} = this.state
    this.props.sendEmail(emailData)
  }
  protected handleFormData = (formField: any) => {
    this.setState({emailData: Object.assign(this.state.emailData, formField)})
  }
  public componentWillMount () {
    // this.props.fetchOrdersList()
  }
  public componentWillReceiveProps (newProps: IProps) {
    // this.handleFetchOrderListState(newProps)
    this.handleSendEmailResponse(newProps)
  }
  public render () {
    const {emailData} = this.state
    return (
      <div className='main-wrapper'>
        <div className='mail-wrapper'>
          <div className='mail-form'>
            <TextField
              label="Sender Name"
              defaultValue="Default Value"
              variant="outlined"
              fullWidth
              value={emailData.senderName}
              onChange={(e) => this.handleFormData({senderName: e.target.value})}
            />
          </div>
          <div className='mail-form'>
          <TextField
            label="Sender Email"
            defaultValue="Default Value"
            variant="outlined"
            fullWidth
            value={emailData.senderEmail}
            onChange={(e) => this.handleFormData({senderEmail: e.target.value})}
          />
          </div>
              
          <div className='mail-form'>
            <TextField
              label="Recipients"
              defaultValue="Default Value"
              variant="outlined"
              value={emailData.recipients}
              fullWidth
              onChange={(e) => this.handleFormData({recipients: e.target.value})}
            />
          </div>
          <br />
          <Button 
            color = 'primary'
            variant="contained"
            onClick={this.handleSendEmail}>Send Email</Button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({mail} : AppState, ownProps: HomeProps): IMapStateToProps => {
  return {mail}
}
const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    sendEmail
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerComponent)