import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import orderReducer from './orderSlice'; 
import customerReducer from './customerSlice';
import inventoryReducer from './inventorySlice';
import searchReducer from './searchSlice';

// Cấu hình store Redux, bao gồm các reducer cho các tính năng (sản phẩm, khách hàng, đơn hàng)
export const store = configureStore({
  reducer: {
    products: productReducer,
    orders: orderReducer,
    customers: customerReducer,
    inventory: inventoryReducer,
    search: searchReducer
  },
});
