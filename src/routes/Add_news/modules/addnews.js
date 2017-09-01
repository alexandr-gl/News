// ------------------------------------
// Constants
// ------------------------------------
export const ADD_NEWS = 'ADD_NEWS';

/*
 * другие константы
 */

export const actions = {
    addNews
}


// ------------------------------------
// Actions
// ------------------------------------
export function addNews() {
    return (dispatch) => {
        dispatch({
            type: ADD_NEWS,
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
        case ADD_NEWS:
                return {label: state.label * action.payload};
        default:
            return state
    }
}