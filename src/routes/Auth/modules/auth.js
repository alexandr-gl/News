// ------------------------------------
// Constants
// ------------------------------------
import axios from 'axios'
import jwt from 'jsonwebtoken'
export const ADD_USER = 'ADD_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const GET_INFO = 'GET_INFO';
export const LOG_OUT = 'LOG_OUT';
export const FACE_BOOK = 'FACE_BOOK'
export const GET_USRNEWS = 'GET_USRNEWS';

// ------------------------------------
// Actions
// ------------------------------------
export function addUser(data) {
    delete data.page;
    return (dispatch) => {
        axios.post('/users', data)
            .then(function (response) {
                let decode = jwt.decode(response.data.user);
                localStorage.setItem('token', JSON.stringify(decode));
                dispatch({
                    type: ADD_USER,
                    payload: response.data
                })
                alert('Registration successful');
            })
            .catch(function (error) {
                console.log(error);
                alert('User with this email has already exist');
            });
    }
}
//-----------------------------------------------------------------------------------
//FACEBOOK
//-----------------------------------------------------------------------------------
export function loginFB() {
    return (dispatch) => {
        axios.get('users/auth/facebook/callback')
            .then(function (response) {
                dispatch({
                    type: LOGIN_USER,
                    payload: response
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
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------

export function loginUser(data) {
    delete data.page;
    return (dispatch) => {
        axios.post('/users/login', data)
            .then(function (response) {
                let decode = jwt.decode(response.data.user);
                localStorage.setItem('token', JSON.stringify(decode));
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
                alert("This user doesn't exist or password is wrong. Please check your email and password or signUp");
            });
    }
}

export function getInfo(data) {
    return (dispatch) => {
        return axios.get('/users/info/' + data)
            .then(function (response) {
                localStorage.setItem('userdata', JSON.stringify(response.data[0].local));
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

export function logOut() {
    return (dispatch) => {
        return axios.get('/users/logout')
            .then(function (response) {
                console.log('response-- ', response.data);
                dispatch({
                    type    : LOG_OUT,
                    payload : response.data
                })
            })
            .catch(function (error) {
                console.log('Request failed', error)
            })
    }
}
export function getNewsUsr(data) {
    return (dispatch, getState) => {
        return axios.get('/news/getusrnews/' + data)
            .then(function (response) {
                localStorage.setItem('news', JSON.stringify(response.data));
                dispatch({
                    type    : GET_USRNEWS,
                    payload : response.data
                })
            })
            .catch(function (error) {
                console.log('Request failed', error)
            })
    }
}



export const actions = {
    addUser, loginUser, getInfo, loginFB, getNewsUsr
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const ACTION_HANDLERS = {
    [ADD_USER]    : (state, action) => {return Object.assign({},state,{data:action.payload})},
    [LOGIN_USER]    : (state, action) => {return Object.assign({},state,{data:action.payload})},
    [GET_INFO] : (state, action) => {return Object.assign({},state,{data:action.payload})},
    [LOG_OUT] : (state, action) => {return Object.assign({},state,{data:action.payload})},
    [FACE_BOOK] : (state, action) => {return Object.assign({},state,{data:action.payload})},
    [GET_USRNEWS] : (state, action) => {return Object.assign({},state,{data:action.payload})}
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