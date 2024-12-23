import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  customers: [],
  loading: false,
};

const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    setCustomers: (state, action) => {
      state.customers = action.payload;
      state.loading = false;
    },
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
    },
    updateCustomer: (state, action) => {
      const index = state.customers.findIndex(customer => customer.id === action.payload.id);
      if (index !== -1) {
        state.customers[index] = action.payload;
      }
    },
    deleteCustomer: (state, action) => {
      state.customers = state.customers.filter(customer => customer.id !== action.payload);
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setCustomers, addCustomer, updateCustomer, deleteCustomer, setLoading } = customerSlice.actions;

export const fetchCustomers = () => async dispatch => {
  dispatch(setLoading());
  try {
    const response = await axios.get('http://localhost:8000/api/customers');
    dispatch(setCustomers(response.data));
  } catch (error) {
    console.error('Error fetching customers:', error);
  }
};

export const createCustomer = (customer) => async dispatch => {
  const response = await axios.post('/api/customers', customer);
  dispatch(addCustomer(response.data));
};

export const editCustomer = (customer) => async dispatch => {
  const response = await axios.put(`/api/customers/${customer.id}`, customer);
  dispatch(updateCustomer(response.data));
};

export const removeCustomer = (id) => async dispatch => {
  await axios.delete(`/api/customers/${id}`);
  dispatch(deleteCustomer(id));
};

export default customerSlice.reducer;
