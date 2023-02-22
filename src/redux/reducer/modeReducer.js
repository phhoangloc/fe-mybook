import { createSlice } from "@reduxjs/toolkit"

const ModeReducer = createSlice({
    name: "mode",
    initialState: "light",
    reducers: {
        setMode: {
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

export const { actions, reducer } = ModeReducer
export const { setMode } = actions;

export default ModeReducer