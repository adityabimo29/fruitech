import axios from 'axios';
export const SHOW = 'SHOW'

export const showData = data => {
    return{
        type:SHOW,
        payload:data,
    }
}

export const getData = (id) => dispatch => {
    return axios.get(`https://5e313f3c576f9d0014d64535.mockapi.io/rac/posts/${id}`).then(res=>{
        dispatch(showData(res.data))
    })
}