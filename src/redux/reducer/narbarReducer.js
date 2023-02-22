import { createSlice } from "@reduxjs/toolkit"

const NarbarReducer = createSlice({
    name: "narbar",
    initialState: "0",
    reducers: {
        setNarbar: {
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

export const { actions, reducer } = NarbarReducer
export const { setNarbar } = actions;

export default NarbarReducer