import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

const PopUpSelector = (state) => state.setPopUp;

const selectPopUpSelector = createSelector(
    PopUpSelector, state => state
)

const PopUpStyle = () => {
    return selectPopUpSelector(store.getState());
}

export default PopUpStyle;