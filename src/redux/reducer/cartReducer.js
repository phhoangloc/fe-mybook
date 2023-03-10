import { createSlice } from "@reduxjs/toolkit"

const CartReducer = createSlice({
    name: "cart",
    initialState: "0",
    reducers: {
        setCart: {
            reducer: (state, action) => {
                return (state = action.payload)
            },
            prepare: (msg) => {
                return {
                    payload: msg
                }
            }
        }
    }
})

export const { actions, reducer } = CartReducer
export const { setCart } = actions;

export default CartReducer