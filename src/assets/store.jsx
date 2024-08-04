import { configureStore } from "@reduxjs/toolkit";
import launchReducer from "./launchSlice";
import rocketsReducer from "./rocketsSlice";

const store = configureStore({
    reducer: {
        launch: launchReducer,
        rockets: rocketsReducer,
    }
});

export default store;