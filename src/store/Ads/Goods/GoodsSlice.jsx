import { createArticle, deleteArticle, fetchGoods, updateArticle } from "./Api"
import { handleFulfilled, handleFulfilledCreate, handleFulfilledDelete, handleFulfilledGet, handlePending, handleRejected, thunkFunction } from "./Services";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    isLoading: false,
    activeCategory: null,
    error: null
}
//структура та логіка для управління станом товарів в сторі: для обробки асинхронних операцій отримання, створення, оновлення та видалення товарів.
export const goodsSlice = createSlice({
    name: 'goods',
    initialState,

  extraReducers: (builder) => {
      builder
        //успішне завершення запиту отримання(створення, оновлення, видалення) товарів, викликається функція handleFulfilled....., яка оновлює стан з отриманими товарами.
    .addCase(fetchGoods.fulfilled, handleFulfilledGet)
    
      .addCase(createArticle.fulfilled, handleFulfilledCreate)
        .addCase(deleteArticle.fulfilled, handleFulfilledDelete)
          .addCase(updateArticle.fulfilled, handleFulfilledGet)
          
          //відповідає за обробку різних типів "fulfilled (pending, rejected)" подій, використовує handleFulfilled функцію, яка оновлює загальний стан для них.
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