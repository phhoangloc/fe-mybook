import { configureStore } from "@reduxjs/toolkit";
import ModeReducer from "./reducer/modeReducer";
import NarbarReducer from "./reducer/narbarReducer";
import PopUpReducer from "./reducer/popUpReducer";
import SlugInputReducer from "./reducer/slugInputReducer";
import EditReducer from "./reducer/editReducer";
import CartReducer from "./reducer/cartReducer";

const store = configureStore({
    reducer: {
        mode: ModeReducer.reducer,
        narbar: NarbarReducer.reducer,
        popup: PopUpReducer.reducer,
        slugInput: SlugInputReducer.reducer,
        edit: EditReducer.reducer,
        cart: CartReducer.reducer,
    }
})

export default store