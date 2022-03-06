import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Product from 'dtos/Product';

const productsSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    setProductsToSend(state: [Product], action: PayloadAction<[Product]>) {
      return state = action.payload;
    },
    clearProducts(state) {
      return state = null;
    }
  }
})

export const { setProductsToSend, clearProducts } = productsSlice.actions;
export default productsSlice.reducer;