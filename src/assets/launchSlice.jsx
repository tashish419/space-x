import { createSlice } from "@reduxjs/toolkit";

const launchSlice = createSlice({
    name: "launch",
    initialState : {
        upcomingLaunch : null,
    },
    reducers : {
        addUpcomingLaunch : (state, action) => {
            state.upcomingLaunch = action.payload;
        }
    }
});

export const { addUpcomingLaunch} = launchSlice.actions;

export default launchSlice.reducer;