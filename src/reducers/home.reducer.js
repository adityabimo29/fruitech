
const initialState = {
    images:[],
}

const reducer = (state = initialState , action) => {
    switch (action.type) {
        case 'GET_IMAGES':
            return{
                images:action.payload
            }
    
        default:
            return state || [];
    }
}

export default reducer;