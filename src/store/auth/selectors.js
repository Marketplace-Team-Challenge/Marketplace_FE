import { createSelector } from "@reduxjs/toolkit";

export const getUserInfo = createSelector(
    state => state.user,
    user => ({
        isAuth: user.isAuth,
        email: user.email,
        token: user.jwt_token,
        firstName: user.firstName,
        lastName: user.lastName,
        city: user.city,
        phone: user.phone,
        userPhoto: user.userPhoto,
        isError: user.isError,
        errorMessage: user.errorMessage,
    })
  );
  
  
  
  
  
  