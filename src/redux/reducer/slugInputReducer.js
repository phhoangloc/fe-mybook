import { createSlice } from "@reduxjs/toolkit"

const SlugInputReducer = createSlice({
    name: "popup",
    initialState: "0px",
    reducers: {
        setSlugInput: {
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

export const { actions, reducer } = SlugInputReducer
export const { setSlugInput } = actions;

export default SlugInputReducer