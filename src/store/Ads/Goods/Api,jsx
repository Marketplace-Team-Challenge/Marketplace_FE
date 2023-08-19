import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//базове url
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//отримання списку товарів
export const fetchGoods = createAsyncThunk(
  'goods/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/goods');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);// для повернення помилки разом з повідомленням про помилку
    }
  }
);
//створення нового товару
export const createArticle = createAsyncThunk(
  'goods/addArticle',
  async (article, thunkAPI) => {
    try {
      const response = await axios.post('/goods', article);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);// для повернення помилки разом з повідомленням про помилку
    }
  }
);
//видалення товару
export const deleteArticle = createAsyncThunk(
  'goods/deleteArticle',
  async (articleId, thunkAPI) => {
    try {
      const response = await axios.delete(`/goods/${articleId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);// для повернення помилки разом з повідомленням про помилку
    }
  }
);
//оновлення даних товару
export const updateArticle = createAsyncThunk(
  'goods/updateArticle',
  async ({ articleId, updatedData }, thunkAPI) => {
    try {
      const response = await axios.put(`/goods/${articleId}`, updatedData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);// для повернення помилки разом з повідомленням про помилку
    }
  }
);
