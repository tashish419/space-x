import { configureStore } from "@reduxjs/toolkit";
import launchReducer from "./launchSlice";

const store = configureStore({
    reducer: {
        launch: launchReducer,
    }
});

export default store;