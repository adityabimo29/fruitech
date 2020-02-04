import axios from 'axios';

export const GET_DATA = 'GET_DATA';

export const getData = (data) => {
    return{
        type:GET_DATA,
        payload:data
    }
}

export const fetchData = () => dispatch => {
    return axios.get('https://5e313f3c576f9d0014d64535.mockapi.io/rac/posts').then(res => {
        dispatch(getData(res.data))
    })
}