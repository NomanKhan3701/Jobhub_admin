import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth'
import popupReducer from './reducers/popup';
import jobsReducer from './reducers/jobs';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		job: jobsReducer,
		popup: popupReducer,
	}
})