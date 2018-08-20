//constant imports
import constants from '../store/constants';

const initialState = {
    authToken: null,
    loader: true
};


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case constants.LOGGED__IN  :
            return {
                ...state,
                authToken: action.payload.token

            };

        case constants.SHOW__LOADER :
            return {
                ...state,
                loader: true
            }
        case constants.HIDE__LOADER :
            return {
                ...state,
                loader: false
            }

        default :
            return state;


    }

};

export default reducer;