// ------------------------------------
// Constants
// ------------------------------------
import axios from 'axios'
import jwt from 'jsonwebtoken'
export const ADD_USER = 'ADD_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const GET_INFO = 'GET_INFO';
export const LOG_OUT = 'LOG_OUT';


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
                let decode = jwt.decode(response.data.user);
                console.log('response from server login', decode);
                dispatch({
                    type: LOGIN_USER,
                    payload: decode
                })
            })
            .catch(function (error) {
                dispatch({
                   type: LOGIN_USER,
                   payload: 'error login'
                })
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

// export function logOut() {
//     return (dispatch) => {
//         return axios.get('/users/logout')
//             .then(function (response) {
//                 console.log('response-- ', response.data);
//                 dispatch({
//                     type    : LOG_OUT,
//                     payload : response.data
//                 })
//             })
//             .catch(function (error) {
//                 console.log('Request failed', error)
//             })
//     }
// }

export const actions = {
    addUser, loginUser, getInfo
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const ACTION_HANDLERS = {
    [ADD_USER]    : (state, action) => {return Object.assign({},state,{data:action.payload})},
    [LOGIN_USER]    : (state, action) => {return Object.assign({},state,{data:action.payload})},
    [GET_INFO] : (state, action) => {return Object.assign({},state,{data:action.payload})},
    [LOG_OUT] : (state, action) => {return Object.assign({},state,{data:action.payload})}
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