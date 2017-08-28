// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'
export const MY_TEST_ACTION = 'MY_TEST_ACTION'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}
export function myFunction (value = 1) {
    return {
        type    : MY_TEST_ACTION,
        payload : "bla-bla-bla"
    }
}
/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

// export const doubleAsync = () => {
//   return (dispatch, getState) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         dispatch({
//           type    : COUNTER_DOUBLE_ASYNC,
//           payload : getState().counter
//         })
//         resolve()
//       }, 200)
//     })
//   }
// }

export const multiply = () => {
    return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : COUNTER_DOUBLE_ASYNC,
          payload : getState().counter
        });
        resolve()
      }, 200)
    })
  }
};

export const actions = {
  increment,
  //doubleAsync
    multiply
};
// Object.assign()
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]    : (state, action) => { return state + action.payload},
  [COUNTER_DOUBLE_ASYNC] : (state, action) => state * 5,
    [MY_TEST_ACTION]: (state, action) => {
    console.log('state-- ', state)
    console.log('action-- ', action)

    },

};

// ------------------------------------
// Reducer
// ------------------------------------
//const initialState = 0;
const initialState = {
  news:[],
  user:{}
}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
