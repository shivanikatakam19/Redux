const { createStore, applyMiddleware } = require("redux")
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()
const axios = require('axios').default
const thunkMiddleware = require('redux-thunk').thunk

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST,
    }
}

const fetchUserSuccess = users => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST: return {
            ...state,
            loading: true
        }

        case FETCH_USER_SUCCESS: return {
            loading: false,
            users: action.payload,
            error: ''
        }

        case FETCH_USER_FAILURE: return {
            loading: false,
            users: [],
            error: action.payload
        }

        default: return state
    }
}

const fetchUsers = () => {
    return async function (dispatch) {
        dispatch(fetchUserRequest())
        await axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            //if api success it will return users
            dispatch(fetchUserSuccess(response.data.map(user => user.id)))
        }).catch(error => {
            //if api gives error
            dispatch(fetchUserFailure(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(logger, thunkMiddleware))
store.dispatch(fetchUsers())