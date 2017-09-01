// ------------------------------------
// Constants
// ------------------------------------
export const MULTIPLY_NUMBER = 'MULTIPLY_NUMBER';

/*
 * другие константы
 */

export const actions = {
    myFunction
}


// ------------------------------------
// Actions
// ------------------------------------
export function myFunction(value = 2) {
    return (dispatch) => {
        dispatch({
            type: MULTIPLY_NUMBER,
            payload: value,
        })
    }
    //return state
    //return initialState
}

// ------------------------------------
// Action Handlers
// ------------------------------------
// export const ACTION_HANDLERS = {
//     MULTIPLY_NUMBER : (state, action) => state.label * action.payload
// }


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {label: 1};
export default function counterReducer (state = initialState, action) {
    // const handler = ACTION_HANDLERS[action.type]
    //
    // return handler ? handler(state, action) : state

    switch (action.type) {
        case MULTIPLY_NUMBER:
                return {label: state.label * action.payload};
        default:
            return state
    }
}