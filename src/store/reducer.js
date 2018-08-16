const initialState = {
    authToken: null,
    loader: null
}


const reducer = (state = initialState, action) => {

    if (action.type === 'LOGGED__IN') {

        return {
            ...state,
            authToken: action.payload.token
        }

    }

    if (action.type === 'SHOW__LOADER') {

        return {
            ...state,
            loader: true
        }

    }

    if (action.type === 'HIDE__LOADER') {

        return {
            ...state,
            loader: false
        }

    }

    return state;

};

export default reducer;