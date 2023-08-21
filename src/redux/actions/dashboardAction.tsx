import { CHANGE_APP_MODE, UPDATE_LOGIN_STATUS } from '../constatnts/index';

export const appMode = (payload: boolean) => {
	return {
		type: CHANGE_APP_MODE,
		payload: payload
	}
}

export const updateLoginStatus = (payload: boolean) => {
	return {
		type: UPDATE_LOGIN_STATUS,
		payload: payload
	}
}