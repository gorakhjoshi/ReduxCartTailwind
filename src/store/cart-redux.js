import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const item = state.items.find((el) => el.id === action.payload.id);
      if (item) {
        item.quantity++;
        item.total = item.total + item.price;
      } else {
        state.items.push({
          ...action.payload,
          total: action.payload.price,
          quantity: 1,
        });
      }
      state.totalQuantity++;
    },
    increaseAmount(state, action) {
      const item = state.items.find((el) => el.id === action.payload);
      item.quantity++;
      item.total = item.total + item.price;
      state.totalQuantity++;
    },
    decreaseAmount(state, action) {
      const item = state.items.find((el) => el.id === action.payload);
      if (item.quantity === 1) {
        state.items = state.items.filter((el) => el.id !== action.payload);
      } else {
        item.quantity--;
        item.total = item.total - item.price;
      }
      state.totalQuantity--;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
