import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import scoreSlice from './score-slice';
import loginSlice from './login-slice';
import studentrecSlice from './studentrecord-slice';

const store = configureStore({
    reducer: {cart: cartSlice.reducer, score: scoreSlice.reducer, login: loginSlice.reducer, studentrecord: studentrecSlice.reducer}
});

export default store;