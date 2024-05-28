import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slice/productSlice';
import userReducer from './slice/userSlice';
import cartReducer from './slice/cartSlice';
import themeReducer from './slice/themeSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
    cart: cartReducer,
    theme: themeReducer,
  },
});

export default store;