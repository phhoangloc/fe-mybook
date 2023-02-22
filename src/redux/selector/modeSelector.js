import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

const ModeSelector = (state) => state.setMode;

const selectModeSelector = createSelector(
    ModeSelector, state => state
)

const ModeStyle = () => {
    return selectModeSelector(store.getState());
}

export default ModeStyle;