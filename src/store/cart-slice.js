import { createSlice } from '@reduxjs/toolkit';
import { startTransition } from 'react';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
		totalQuantity: 0,
		finalPrice: 0,
		changed: false,
	},
	reducers: {
		replaceCart(state, action) {
			state.totalQuantity = action.payload.totalQuantity;
			state.items = action.payload.items;
			state.finalPrice = action.payload.finalPrice;
		},
		addItem(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find(item => item.id === newItem.id);
			state.totalQuantity += newItem.counter;
			state.finalPrice += newItem.counter * newItem.price;
			state.changed = true;
			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					quantity: newItem.counter,
					totalPrice: newItem.price * newItem.counter,
					name: newItem.name,
				});
			} else {
				existingItem.quantity += newItem.counter;
				existingItem.totalPrice = existingItem.totalPrice + newItem.price * newItem.counter;
			}
		},
		removeItem(state, action) {
			const id = action.payload;
			const existingItem = state.items.find(item => item.id === id);
			state.totalQuantity--;
			state.finalPrice -= existingItem.price;
			state.changed = true;
			if (existingItem.quantity === 1) {
				state.items = state.items.filter(item => item.id !== id);
			} else {
				existingItem.quantity--;
				existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
			}
		},
		clearCart(state){
			
			state.items= [];
			state.totalQuantity= 0;
			state.finalPrice= 0;
			state.changed=false;
			console.log('Cleared cart state: ' + JSON.stringify(state))
		}
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
