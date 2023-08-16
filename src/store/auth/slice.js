import { createSlice } from "@reduxjs/toolkit";
import { login, registration} from "./operations";

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
	reducers: {
		logoutUser() {
			document.cookie = 'jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; HttpOnly;';
					return {
					...initialState,
				};
		},
	},
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
				state.isAuth = action.payload.isAuth;
				state.firstName = action.payload.firstName;
				state.lastName = action.payload.lastName;
				state.email = action.payload.email;
				state.city = action.payload.city;
				state.phone = action.payload.phone;
				state.jwt_token = action.payload.token;
				state.userPhoto = action.payload.userPhoto;	
			})
			.addCase(login.rejected, (state, action) => {
				state.isError = true;
				state.errorMessage = action.payload;
			})
			// .addCase(logout.fulfilled, () => {
			// 	localStorage.clear();
			// 	return {
			// 		...initialState,
			// 	};
			// })
			// .addCase(logout.rejected, (state, action) => {
			// 	state.isError = true;
			// 	state.errorMessage = action.payload;
			// })
	},
});

export const { reducer } = userSlice;

export const { logoutUser } = userSlice.actions;