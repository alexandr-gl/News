// ------------------------------------
// Constants
// ------------------------------------
export const GET_NEWS = 'GET_NEWS';

import axios from 'axios';

/*
 * другие константы
 */

export const actions = {
    getNews
}


// ------------------------------------
// Actions
// ------------------------------------
export function getNews() {
    return (dispatch, getState) => {
            return axios.get('/news/getnews')
            .then(function (response) {
                console.log('response-- ', response.data);
                console.log('easy', []==![]);
                dispatch({
                    type    : GET_NEWS,
                    payload : response.data,
                })
            })
            .catch(function (error) {
                console.log('Request failed', error)
            })
}
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const ACTION_HANDLERS = {
    //GET_NEWS : (state, action) => {return {label: state.label * action.payload}}
    GET_NEWS : (state, action) => Object.assign({}, state, {
        data: action.payload,
    })
}


// ------------------------------------
// Reducer
// ------------------------------------
//const initialState = {label: 100500};
const initialState = {data: []};
export default function counterReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state

    // switch (action.type) {
    //     case MULTIPLY_NUMBER:
    //             return {label: state.label * action.payload};
    //     default:
    //         return state
    // }
}