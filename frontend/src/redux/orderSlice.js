// src/redux/orderSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  orders: [],
  loading: false,
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
      state.loading = false;
    },
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    updateOrder: (state, action) => {
      const index = state.orders.findIndex(order => order.id === action.payload.id);
      if (index !== -1) {
        state.orders[index] = action.payload;
      }
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(order => order.id !== action.payload);
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setOrders, addOrder, updateOrder, deleteOrder, setLoading } = orderSlice.actions;

export const fetchOrders = () => async dispatch => {
  dispatch(setLoading());
  try {
    const response = await axios.get('http://localhost:8000/api/orders');
    dispatch(setOrders(response.data));
  } catch (error) {
    console.error('Error fetching orders:', error);
  }
};

export const createOrder = (order) => async dispatch => {
  const response = await axios.post('http://localhost:8000/api/orders', order);
  dispatch(addOrder(response.data));
};

export const editOrder = (order) => async dispatch => {
  const response = await axios.put(`http://localhost:8000/api/orders/${order.id}`, order);
  dispatch(updateOrder(response.data));
};

export const removeOrder = (id) => async dispatch => {
  await axios.delete(`/api/orders/${id}`);
  dispatch(deleteOrder(id));
};

export default orderSlice.reducer;



