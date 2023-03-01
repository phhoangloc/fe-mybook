import { createSlice } from "@reduxjs/toolkit"

const EditReducer = createSlice({
    name: "popup",
    initialState: false,
    reducers: {
        setEdit: {
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

export const { actions, reducer } = EditReducer
export const { setEdit } = actions;

export default EditReducer