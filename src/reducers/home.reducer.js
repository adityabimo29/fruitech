
const initialState = {
    images:[],
    subs:[]
}

const reducer = (state = initialState , action) => {
    switch (action.type) {
        case 'GET_IMAGES':
            return{
                images:action.payload
            }
        case 'GET_SUBS':
            return{
                subs:action.payload
            }
    
        default:
            return state || [];
    }
}

export default reducer;