import { createSlice } from "@reduxjs/toolkit";

const launchSlice = createSlice({
    name: "launch",
    initialState : {
        upcomingLaunch : null,
        // previousLaunch : null,
    },
    reducers : {
        addUpcomingLaunch : (state, action) => {
            state.upcomingLaunch = action.payload;
        },
        // addPreviousLaunch : (state, action) => {
        //     state.previousLaunch = action.payload;
        // },
    }
});

export const { addUpcomingLaunch} = launchSlice.actions;

export default launchSlice.reducer;