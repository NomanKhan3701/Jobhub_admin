import * as actionTypes from "../constants/auth";
import { updateObject } from "../../shared/utility";

const initialState = {
	token: null,
	user: null,
	loginInProgress: false,
	redirectHomeAsNotVerified: null,
	error: null,
	message: null,
}

const authStart = (state, action) => {
	const authStartStatus = updateObject(state, {
		error: null,
		loading: true,
		message: null,
		token: null,
		redirectHomeAsNotVerified: null,
		user: null
	})
	return authStartStatus
}

const authSuccess = (state, action) => {
	return updateObject(state, {
		token: action.token,
		user: action.user,
		error: null,
		loading: false,
		message: null
	})
}

const authFail = (state, action) => {
	const authFailStatus = updateObject(state, {
		loading: false,
		error: action.error,
		message: action.message
	})
	return authFailStatus
}

const authUserverfiedOrNot = (state, action) => {
	const authUserverfiedOrNot = updateObject(state, {
		user: action.user,
		loading: false
	})
	return authUserverfiedOrNot
}

const authLogout = (state, action) => {
	return updateObject(state, { token: null, user: null })
}

const setRedirectPathHomeAsUserNotVerified = (state, action) => {
	return updateObject(state, { redirectHomeAsNotVerified: action.value })
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_START:
			return authStart(state, action)
		case actionTypes.AUTH_FAIL:
			return authFail(state, action)
		case actionTypes.AUTH_UNVERIFIED_USER:
			return authUserverfiedOrNot(state, action)
		case actionTypes.AUTH_SUCCESS:
			return authSuccess(state, action)
		case actionTypes.AUTH_LOGOUT:
			return authLogout(state, action)
		case actionTypes.SET_REDIRECT_PATH_HOME_USER_NOT_VERIFIED:
			return setRedirectPathHomeAsUserNotVerified(state, action)
		default:
			return state
	}
}

export default authReducer