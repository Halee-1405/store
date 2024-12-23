import { createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  loading: false,  // Thêm loading để qu ản lý trạng thái tải
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.loading = false;  // Đặt loading là false khi có dữ liệu
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    setLoading: (state) => {
      state.loading = true;  // Đặt loading là true khi đang tải dữ liệu
    },
  },
});

export const { setProducts, addProduct, updateProduct, deleteProduct, setLoading } = productSlice.actions;

export const fetchProducts = () => async dispatch => {
  dispatch(setLoading());  // Set loading trước khi bắt đầu fetch
  try {
    const response = await axios.get('http://localhost:8000/api/products');
    dispatch(setProducts(response.data));
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

export const createProduct = (product) => async dispatch => {
  const response = await axios.post('http://localhost:8000/api/products', product);
  dispatch(addProduct(response.data));
};

export const editProduct = (product) => async dispatch => {
  const response = await axios.put(`http://localhost:8000/api/products/${product.id}`, product);
  dispatch(updateProduct(response.data));
};

export const removeProduct = (id) => async dispatch => {
  await axios.delete(`http://localhost:8000/api/products/${id}`);
  dispatch(deleteProduct(id));
};

export default productSlice.reducer;
