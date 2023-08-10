import { createSelector } from "@reduxjs/toolkit";

export const getUserInfo = createSelector(
    state => state.user,
    user => ({
        isAuth: user.isAuth,
        email: user.email,
        token: user.jwt_token,
        firstName: user.firstName,
        lastName: user.lastName,
        country: user.country,
        phone: user.phone,
        userPhoto: user.userPhoto,
        isError: user.isError,
        errorMessage: user.errorMessage,
    })
  );
  
  
  
  
  
  