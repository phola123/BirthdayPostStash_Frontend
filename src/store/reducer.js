
const initialState = {
   authToken: null
}


const reducer = ( state = initialState, action ) => {

    if ( action.type === 'LOGGED__IN' ) {

        return {
            authToken : action.payload.token
        }

    }

    return state;

};

export default reducer;