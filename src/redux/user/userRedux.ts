import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '/types/User';

interface UserState {
	user: User | undefined;
}

const initialState: UserState = {
	user: undefined,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User | undefined>) => {
			state.user = action.payload;
		},
	},
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
