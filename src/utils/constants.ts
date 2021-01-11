export const SERVER_HOST = process.env.REACT_APP_SERVER_HOST || 'http://localhost:6080'

export enum DEFAULT_REDUCER_STATUSES {
    FETCHING='FETCHING',
    FETCHED='FETCHED',
    FAILED='FAILED',
    IDLE='IDLE',
}