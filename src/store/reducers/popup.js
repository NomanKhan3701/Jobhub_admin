import * as actionTypes from "../constants/popup";
import { updateObject } from "../../shared/utility";

const initialState = {
    loginPopupStatus: false,
    registerPopupStatus: false,
}

const registerPopupStatus = (state, action) => {
    return updateObject(state, { registerPopupStatus: action.data })
}

const loginPopupStatus = (state, action) => {
    return updateObject(state, { loginPopupStatus: action.data })
}

const popupReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_LOGIN_POPUP:
            return loginPopupStatus(state, action)
        case actionTypes.SHOW_REGISTER_POPUP:
            return registerPopupStatus(state, action)
        default:
            return state
    }
}

export default popupReducer