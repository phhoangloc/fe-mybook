import { configureStore } from "@reduxjs/toolkit";
import ModeReducer from "./reducer/modeReducer";
import NarbarReducer from "./reducer/narbarReducer";

const store = configureStore({
    reducer: {
        mode: ModeReducer.reducer,
        narbar: NarbarReducer.reducer,
    }
})

export default store