
const initialState = {
    images:[],
    subs:[],
    posts:[],
}

const reducer = (state = initialState , action) => {
    switch (action.type) {
        case 'GET_IMAGES':
            return{
                ...state,
                images:action.payload
            }
        case 'GET_SUBS':
            return{
                ...state,
                subs:action.payload
            }
        case 'GET_POSTS':
            return{
                ...state,
                posts:action.payload
            }
    
        default:
            return state || [];
    }
}

export default reducer;