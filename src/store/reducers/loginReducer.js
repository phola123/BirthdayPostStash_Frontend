//constant imports
import constants from '../constants';

const initialState = {
    authToken: null
};


const loginReducer = (state = initialState, action) => {

    switch (action.type) {

        case constants.LOGGED__IN  :
            return {
                ...state,
                authToken: action.payload.token

            };

        default :
            return state;


    }

};

export default loginReducer;