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
    console.log('data-- ', data)
    let formData = new FormData("fileinfo");
    formData.append("author", data.author)
    formData.append("topic", data.topic)
    formData.append("newstext", data.newstext)
    formData.append("tags", data.tags)
    formData.append("file", data.file)

    for (let [key, value] of formData.entries()) {
        console.log('-------', key, value);
    }
    console.log('formData-- ', formData)
    return (dispatch) => {
        axios.post('/news', formData)
            .then(function (response) {
                console.log('response from server-------------', response.data);
                dispatch({
                    type: ADD_NEWS,
                    payload: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
        // obj: {
            // author: data.author,
            // topic: data.topic,
            // newstext: data.newstext,
            // tags: data.tags,
            // file: formData}
        // return axios.post('/news', data)
        // // return axios.post('/news', {
        // //     newstext: data.newstext,
        // //         tags: data.tags,
        // //         topic: data.topic,
        // //         author: data.author,
        // //         file: data.file})
        //     .then(function (response) {
        //         console.log('response from server-------------', response.data);
        //         dispatch({
        //             type:ADD_NEWS,
        //             payload:response.data
        //         })
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
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