import { createSlice } from "@reduxjs/toolkit"

const PopUpReducer = createSlice({
    name: "popup",
    initialState: {
        status:"close",
        success:false,
        msg:""
    },
    reducers: {
        setPopUp: {
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

export const { actions, reducer } = PopUpReducer
export const { setPopUp } = actions;

export default PopUpReducer