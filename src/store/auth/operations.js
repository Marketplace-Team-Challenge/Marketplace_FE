import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseServerUrl } from "../../constants/Values";
import axios from 'axios';

export const registration = createAsyncThunk(
	'user/register',
	async (
		credentials,
		{ rejectWithValue, fulfillWithValue, thunkAPI }
	) => {
		try {
			const response = await axios.post(
				`${baseServerUrl}/auth/registration`,
				credentials,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
            const status = response.status;
			if (response.status === 201) {
				return fulfillWithValue(status);
			} else if (response.status === 400) {
				const errorStatus = response.status;
				const errorMessage = response.data.message;
				return rejectWithValue({
					errorStatus,
					errorMessage,
				});
			} 
			// else if (response.status > 400) {
			// 	return rejectWithValue(response.data.message);
			// }
		} catch (error) {
            return thunkAPI.rejectWithValue({
				status: 500,
				message: 'Internal server error',
			});
		}
	}
);

export const login = createAsyncThunk(
	'user/login',
	async (userCredentials, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${baseServerUrl}/auth/authentication`, userCredentials, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (response.status !== 200) {
				throw new Error('There was a problem with your request');
			}
			const data = await response.data;
			const token = response.data.token;
			document.cookie = `jwtToken=${token}; HttpOnly; SameSite=Strict;`;
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

