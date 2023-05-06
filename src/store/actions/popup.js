import * as actionTypes from "../constants/popup";

export const showLoginPopup = (data) => {
    return {
        type: actionTypes.SHOW_LOGIN_POPUP,
        data: data,
    };
};

export const showRegisterModal = (data) => {
    return {
        type: actionTypes.SHOW_REGISTER_POPUP,
        data,
    };
};
