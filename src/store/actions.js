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
    },

    signInOpen: {
        type: constants.LOGIN__OPEN
    },

    signInClose: {
        type: constants.LOGIN__CLOSE
    },

    registerOpen: {
        type: constants.REGISTER__OPEN
    },

    registerClose: {
        type: constants.REGISTER__CLOSE
    }


};

export default actions;