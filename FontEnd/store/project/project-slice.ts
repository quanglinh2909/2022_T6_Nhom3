import { createSlice } from '@reduxjs/toolkit';
const initialState: any[] = [];
const projects = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        // addToCart(state, action) {
        //     state.push(action.payload);
        // },
        // increment(state, action) {
        //     const productId = action.payload;
        //     const productIndex = state.findIndex((product) => product.ProductId == productId);
        //     if (!productIndex && productIndex < 0) return;
        //     state[productIndex].Quality += 1;
        // },
        // decrement(state, action) {
        //     const productId = action.payload;
        //     const productIndex = state.findIndex((product) => product.ProductId == productId);
        //     if (!productIndex && productIndex < 0) return;
        //     if (state[productIndex].Quality == 1) {
        //         state.splice(productIndex, 1);
        //         return;
        //     }
        //     state[productIndex].Quality -= 1;
        // },
        // deleteCartItem(state, action) {
        //     const productId = action.payload;
        //     state.filter((product) => product.ProductId !== productId);
        // },
        // deleteAll(state) {
        //     state.length = 0;
        // },
    },
});

const { reducer, actions } = projects;

export const {} = actions;

export default reducer;
