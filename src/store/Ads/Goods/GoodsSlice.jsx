import { createArticle, deleteArticle, fetchGoods, updateArticle } from "./Api"
import { handleFulfilled, handleFulfilledCreate, handleFulfilledDelete, handleFulfilledGet, handlePending, handleRejected, thunkFunction } from "./Services";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    isLoading: false,
    activeCategory: null,
    error: null
}

export const goodsSlice = createSlice({
    name: 'goods',
    initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.fulfilled, handleFulfilledGet)
      .addCase(createArticle.fulfilled, handleFulfilledCreate)
        .addCase(deleteArticle.fulfilled, handleFulfilledDelete)
        .addCase(updateArticle.fulfilled, handleFulfilledGet)
      .addMatcher(isAnyOf(
        ...thunkFunction('fulfilled')
      ), handleFulfilled
      )
      .addMatcher(isAnyOf(
        ...thunkFunction('pending')
      ), handlePending
      )
      .addMatcher(isAnyOf(
        ...thunkFunction('rejected')
      ), handleRejected
    )
  }
})
export const goodsReducer = goodsSlice.reducer;