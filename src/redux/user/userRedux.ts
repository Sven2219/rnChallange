import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '/types/User';

interface UserState {
	user: User | undefined;
	isLoggedIn: boolean;
}

const initialState: UserState = {
	user: undefined,
	isLoggedIn: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User | undefined>) => {
			state.user = action.payload;
			state.isLoggedIn = true;
		},
		removeUser: (state) => {
			state.user = undefined;
			state.isLoggedIn = false;
		},
	},
});

export const { setUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
