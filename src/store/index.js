import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer } from './auth/slice';
import { loadFromLocalStorage, saveToLocalStorage } from './auth/services';

export const rootReducer = combineReducers({
	user: reducer,
});

const persistedStore = loadFromLocalStorage();

export const store = configureStore({
	reducer: rootReducer,
	preloadedState: persistedStore,
});

store.subscribe(() => {
	saveToLocalStorage(store.getState());
});