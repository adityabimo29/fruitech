import axios from 'axios';
export const GET_IMAGES = 'GET_IMAGES';

export const getImages = (data) => {
    return{
        type: GET_IMAGES,
        payload:data
    }
}

export const fetchImages = () =>  dispatch => {
    return axios.get('https://api.unsplash.com/photos/?client_id=d09f19d5218df29f770ed0856ae989de7e3d8b1c317e29f9ee74aa0f6ca28e2c').then(res => {
        const pictures = res.data.slice(0, 6);
        dispatch(getImages(pictures))
    })
}