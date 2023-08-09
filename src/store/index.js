import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer } from './auth/slice';

export const saveToLocalStorage = (state) => {
	try {
		localStorage.setItem(`state`, JSON.stringify(state));
		const locStorage = localStorage.getItem('state');
		return locStorage;
	} catch (e) {
		console.error(e);
	}
};

export const loadFromLocalStorage = () => {
	try {
		const stateStr = localStorage.getItem(`state`);
		return stateStr ? JSON.parse(stateStr) : undefined;
	} catch (e) {
		console.error(e);
		return undefined;
	}
};

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