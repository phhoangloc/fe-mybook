import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

const NarbarSelector = (state) => state.setNarbar;

const selectNarbarSelector = createSelector(
    NarbarSelector, state => state
)

const NarbarStyle = () => {
    return selectNarbarSelector(store.getState());
}

export default NarbarStyle;