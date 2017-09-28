// ------------------------------------
// Constants
// ------------------------------------
import axios from 'axios'
export const ADD_NEWS = 'ADD_NEWS';




// export function increment (value = 1) {
//     return {
//         type    : COUNTER_INCREMENT,
//         payload : value
//     }
// }

// ------------------------------------
// Actions
// ------------------------------------
export function addNews(data) {
    let formData = new FormData("fileinfo");
    formData.append("author", data.author)
    formData.append("topic", data.topic)
    formData.append("newstext", data.newstext)
    formData.append("tags", data.tags)
    formData.append("file", data.file)

    // for (let [key, value] of formData.entries()) {
    //     console.log('-------', key, value);
    // }
    console.log('formData-- ', formData)
    return (dispatch) => {
        axios.post('/news', formData)
            .then(function (response) {
                alert('News were added successfully')
                dispatch({
                    type: ADD_NEWS,
                    payload: response.data
                })
            })
            .catch(function (error) {
                alert('Error. Something go wrong');
            });
    }

}


export const actions = {
    addNews
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const ACTION_HANDLERS = {
    [ADD_NEWS]    : (state, action) => {return Object.assign({},state,{something:action.payload})},
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