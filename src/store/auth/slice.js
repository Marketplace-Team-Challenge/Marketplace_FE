import { createSlice } from "@reduxjs/toolkit";
import { login, logout, registration} from "./operations";

export const initialState = {
	isAuth: false,
	firstName: '',
    lastName: '',
	email: '',
    city: '',
    phone: 0,
	jwt_token: '',
	userPhoto: {},
	isError: false,
	errorMessage: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(registration.fulfilled, (state, action) => {
				state.statusRegistration = action.payload;
			})
			.addCase(registration.rejected, (state, action) => {
				state.isError = true;
				state.errorMessage = action.payload;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isAuth = true;
				state.username = action.payload.username;
				state.email = action.payload.email;
				state.role = action.payload.role;
				state.userPhoto = action.payload.userPhoto;
				state.jwt_token = action.payload.jwt_token;
			})
			.addCase(login.rejected, (state, action) => {
				state.isError = true;
				state.errorMessage = action.payload;
			})
			.addCase(logout.fulfilled, () => {
				localStorage.clear();
				return {
					...initialState,
				};
			})
			.addCase(logout.rejected, (state, action) => {
				state.isError = true;
				state.errorMessage = action.payload;
			})
	},
});

export const { reducer } = userSlice;