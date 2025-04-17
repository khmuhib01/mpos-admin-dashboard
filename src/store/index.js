import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

export function makeStore() {
	return configureStore({
		reducer: {
			counter: counterReducer,
			// add more slices here…
		},
		// (Optional) Add middleware, devTools config, etc.
	});
}

// For a plain React‑Redux setup:
export const store = makeStore();
