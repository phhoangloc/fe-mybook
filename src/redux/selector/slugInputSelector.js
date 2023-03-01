import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

const SlugInputSelector = (state) => state.setSlugInput;

const selectSlugInputSelector = createSelector(
    SlugInputSelector, state => state
)

const SlugInputStyle = () => {
    return selectSlugInputSelector(store.getState());
}

export default SlugInputStyle;