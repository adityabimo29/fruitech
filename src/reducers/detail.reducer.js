const initialState = {
    data:{}
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'SHOW':
            
            return{
                data:action.payload
            }
    
        default:
            return state;
    }
}

export default reducer;