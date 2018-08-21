//constant imports
import constants from '../constants';

const initialState = {
    loaderShow: true
};


const loaderReducer = (state = initialState, action) => {

    switch (action.type) {

        case constants.SHOW__LOADER :
            return {
                ...state,
                loaderShow: true
            };

        case constants.HIDE__LOADER :
            return {
                ...state,
                loaderShow: false
            };

        default :
            return state;


    }

};

export default loaderReducer;