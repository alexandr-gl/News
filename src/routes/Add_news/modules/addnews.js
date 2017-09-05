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
    return (dispatch, getState) => {
        return axios.get('/qqz')
            .then(function (response) {
                dispatch({
                    type    : DONE,
                    payload : response,
                    data: 'lol kek cheburek'
                })
            })
            .catch(function (error) {
                dispatch({
                    type    : ERROR_ACTION,
                    payload : error
                })
            });
}}


// ------------------------------------
// Action Handlers
// ------------------------------------
export const ACTION_HANDLERS = {

}


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {label: 1};
export default function counterReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}