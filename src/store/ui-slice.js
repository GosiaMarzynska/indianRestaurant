import { createSlice } from '@reduxjs/toolkit';

const inicialUI = { cartIsVisible: false, notification: "" };
const uiSlice = createSlice({
	name: 'ui',
	initialState: inicialUI,
	reducers: {
		toggle(state) {
			state.cartIsVisible = !state.cartIsVisible;
		},
		showNotification(state, action) {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message,
			};
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
