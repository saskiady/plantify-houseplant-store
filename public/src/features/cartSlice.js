import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {}, // { productId: { product, quantity } }
  totalCount: 0,
  totalPrice: 0,
};

const recalc = (items) => {
  let totalCount = 0;
  let totalPrice = 0;
  Object.values(items).forEach(({ product, quantity }) => {
    totalCount += quantity;
    totalPrice += product.price * quantity;
  });
  return { totalCount, totalPrice };
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const id = product.id;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = { product, quantity: 1 };
      }
      const totals = recalc(state.items);
      state.totalCount = totals.totalCount;
      state.totalPrice = totals.totalPrice;
    },
    increase(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      }
      const totals = recalc(state.items);
      state.totalCount = totals.totalCount;
      state.totalPrice = totals.totalPrice;
    },
    decrease(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity -= 1;
        if (state.items[id].quantity <= 0) {
          delete state.items[id];
        }
      }
      const totals = recalc(state.items);
      state.totalCount = totals.totalCount;
      state.totalPrice = totals.totalPrice;
    },
    removeItem(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        delete state.items[id];
      }
      const totals = recalc(state.items);
      state.totalCount = totals.totalCount;
      state.totalPrice = totals.totalPrice;
    },
    clearCart(state) {
      state.items = {};
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, increase, decrease, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
