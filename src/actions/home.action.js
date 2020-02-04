import axios from 'axios';
export const GET_IMAGES = 'GET_IMAGES';
export const GET_SUBS = 'GET_SUBS';
export const GET_POSTS = 'GET_POSTS'

export const getImages = (data) => {
    return{
        type: GET_IMAGES,
        payload:data
    }
}

export const getSubs = data => {
    return{
        type:GET_SUBS,
        payload:data
    }
}

export const getPosts = data => {
    return{
        type:GET_POSTS,
        payload:data
    }
}

export const fetchImages = () =>  dispatch => {
    return axios.get('https://api.unsplash.com/photos/?client_id=ac15aa4270184c8ad75db8412ee57d42f779c9079ad53d0c7be4f870f20353af').then(res => {
        const pictures = res.data.slice(0, 6);
        dispatch(getImages(pictures))
    })
}

export const addSubscribe = (email) => dispatch => {
    return axios.post('https://5e313f3c576f9d0014d64535.mockapi.io/rac/subscribers',email).then(res => {
        dispatch(fetchImages())
    })
}

export const fetchSubs = (data) => dispatch => {
    return axios.get('https://api.unsplash.com/photos/?client_id=ac15aa4270184c8ad75db8412ee57d42f779c9079ad53d0c7be4f870f20353af').then(res => {
        dispatch(getSubs(res.data))
    })
}

export const fetchPosts = () => dispatch => {
    return axios.get('https://5e313f3c576f9d0014d64535.mockapi.io/rac/posts').then(res => {
        //const posty = res.data.slice(0,9);
        console.log('enter');
        dispatch(getPosts(res.data))
    })
}

