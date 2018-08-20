//Reducer Import

import constants from './constants';

//All Actions


const actions = {

    loggedIn: {
        type: constants.LOGGED__IN
    },

    showLoader: {
        type: constants.SHOW__LOADER
    },

    hideLoader: {
        type: constants.HIDE__LOADER
    }


};

export default actions;