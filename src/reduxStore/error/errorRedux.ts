import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ErrorState {
	error: boolean;
}

const initialState: ErrorState = {
	error: false,
};

const errorSlice = createSlice({
	name: 'error',
	initialState,
	reducers: {
		setError: (state, action: PayloadAction<boolean>) => {
			state.error = action.payload;
		},
	},
});

export const { setError } = errorSlice.actions;
export const errorReducer = errorSlice.reducer;
