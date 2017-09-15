// ------------------------------------
// Constants
// ------------------------------------
import axios from 'axios'
export const ADD_USER = 'ADD_USER';


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


export const actions = {
    addUser
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const ACTION_HANDLERS = {
    [ADD_USER]    : (state, action) => {return Object.assign({},state,{data:action.payload})},
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