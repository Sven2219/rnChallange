import { configureStore } from '@reduxjs/toolkit';
import { errorReducer } from './error/errorRedux';
import { userReducer } from './user/userRedux';

const store = configureStore({
	reducer: {
		user: userReducer,
		error: errorReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
