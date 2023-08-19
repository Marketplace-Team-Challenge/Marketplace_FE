// import { createArticle, deleteArticle, fetchGoods, updateArticle } from "./Api"
// import { handleFulfilled, handleFulfilledCreate, handleFulfilledDelete, handleFulfilledGet, handlePending, handleRejected, thunkFunction } from "./Services";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    isLoading: false,
    activeCategory: null,
    error: null
}

export const contactsSlice = createSlice({
    name: 'goods',
    initialState,
})