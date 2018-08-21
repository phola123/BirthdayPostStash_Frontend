//constant imports
import constants from '../constants';

const initialState = {
    logInState: null,
    registerState: null,
};


const popupReducer = (state = initialState, action) => {

    switch (action.type) {

        case constants.LOGIN__OPEN:
            return {
                ...state,
                logInState: true

            };

        case constants.LOGIN__CLOSE:
            return {
                ...state,
                logInState: false
            };

        case constants.REGISTER__OPEN:
            return {
                ...state,
                registerState: true
            };

        case constants.REGISTER__CLOSE:
            return {
                ...state,
                registerState: false
            };


        default :
            return state;


    }

};

export default popupReducer;