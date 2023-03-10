import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

const CartSelector = (state) => state.setCart;

const selectCartSelector = createSelector(
    CartSelector, state => state
)

const CartStyle = () => {
    return selectCartSelector(store.getState());
}

export default CartStyle;