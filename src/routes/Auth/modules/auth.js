// ------------------------------------
// Constants
// ------------------------------------
import axios from 'axios'
export const ADD_USER = 'ADD_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const GET_INFO = 'GET_INFO';


// ------------------------------------
// Actions
// ------------------------------------
export function addUser(data) {
    delete data.page;
    console.log('data-- ', data)
    return (dispatch) => {
        axios.post('/users', data)
            .then(function (response) {
                console.log('response from server-------------', response.data);
                dispatch({
                    type: ADD_USER,
                    payload: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
export function loginUser(data) {
    delete data.page;
    console.log('data-- ', data)
    return (dispatch) => {
        axios.post('/users/login', data)
            .then(function (response) {
                console.log('response from server login', response.data);
                dispatch({
                    type: LOGIN_USER,
                    payload: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function getInfo() {
    return (dispatch) => {
        return axios.get('/users/signup')
            .then(function (response) {
                console.log('response-- ', response.data);
                dispatch({
                    type    : GET_INFO,
                    payload : response.data
                })
            })
            .catch(function (error) {
                console.log('Request failed', error)
            })
    }
}

export const actions = {
    addUser, loginUser, getInfo
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const ACTION_HANDLERS = {
    [ADD_USER]    : (state, action) => {return Object.assign({},state,{data:action.payload})},
    [LOGIN_USER]    : (state, action) => {return Object.assign({},state,{data:action.payload})},
    [GET_INFO] : (state, action) => {return Object.assign({},state,{data:action.payload})}
}




// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    something:'asdfasdfasdf'
};


export default function counterReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}