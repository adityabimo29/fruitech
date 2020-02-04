import axios from 'axios';
//export const ADD_CONTACT = 'ADD_CONTACT';


export const addContact = data => dispatch => {
    return axios.post('http://5e313f3c576f9d0014d64535.mockapi.io/rac/contact',data).then(res => {
       alert('Successfulyy send');
       window.location.reload();
    })
}