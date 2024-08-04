import { createSlice } from "@reduxjs/toolkit";

const rocketsSlice = createSlice({
    name: "rockets",
    initialState : {
        rockets : [],
    },
    reducers : {
        addRockets : (state, action) => {
            state.rockets = action.payload;
        },      
    }
});

export const { addRockets} = rocketsSlice.actions;

export default rocketsSlice.reducer;