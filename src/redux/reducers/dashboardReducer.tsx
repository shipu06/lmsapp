import { CHANGE_APP_MODE, UPDATE_LOGIN_STATUS } from "../constatnts";

type DashboardState = {
	isLoggedIn: boolean;
	isDark: boolean;
};


const initialState: DashboardState = {
	isDark: true,
	isLoggedIn: false
};
const dashboardReducer = (state = initialState, action: any) => {
	const { type, payload } = action;
	console.log(type, payload, 'this is data for test');
	switch (type) {
		case CHANGE_APP_MODE:
			return {
				...state,
				isDark: payload
			};
		case UPDATE_LOGIN_STATUS:
			return {
				...state,
				isLoggedIn: payload
			}
		default:
			return state;
	}
}
export default dashboardReducer;