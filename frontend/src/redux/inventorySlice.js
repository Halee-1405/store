import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  loading: false,
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    setInventoryItems: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    addInventoryItem: (state, action) => {
      state.items.push(action.payload);
    },
    updateInventoryItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteInventoryItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setInventoryItems, addInventoryItem, updateInventoryItem, deleteInventoryItem, setLoading } = inventorySlice.actions;

export const fetchInventoryItems = () => async dispatch => {
  dispatch(setLoading());
  try {
    const response = await axios.get('http://localhost:8000/api/inventory');
    dispatch(setInventoryItems(response.data));
  } catch (error) {
    console.error('Error fetching inventory items:', error);
  }
};

export const createInventoryItem = (item) => async dispatch => {
  const response = await axios.post('/api/inventory', item);
  dispatch(addInventoryItem(response.data));
};

export const editInventoryItem = (item) => async dispatch => {
  const response = await axios.put(`/api/inventory/${item.id}`, item);
  dispatch(updateInventoryItem(response.data));
};

export const removeInventoryItem = (id) => async dispatch => {
  await axios.delete(`/api/inventory/${id}`);
  dispatch(deleteInventoryItem(id));
};

export default inventorySlice.reducer;