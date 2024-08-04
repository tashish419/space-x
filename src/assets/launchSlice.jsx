import { createSlice } from "@reduxjs/toolkit";

const launchSlice = createSlice({
    name: "launch",
    initialState : {
        upcomingLaunch : [],
        previousLaunch : [],
    },
    reducers : {
        addUpcomingLaunch : (state, action) => {
            state.upcomingLaunch = action.payload;
        },
        addPreviousLaunch : (state, action) => {
            state.previousLaunch = action.payload;
        },
    }
});

export const { addUpcomingLaunch, addPreviousLaunch} = launchSlice.actions;

export default launchSlice.reducer;