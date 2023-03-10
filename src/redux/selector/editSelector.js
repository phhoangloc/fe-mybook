import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

const EditSelector = (state) => state.setEdit;

const selectEditSelector = createSelector(
    EditSelector, state => state
)

const EditStyle = () => {
    return selectEditSelector(store.getState());
}

export default EditStyle;