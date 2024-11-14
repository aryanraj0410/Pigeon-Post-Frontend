import {createSlice} from "@reduxjs/toolkit";
const pigeonSlice = createSlice({
    name:"pigeon",
    initialState:{
        pigeons:null  
    },
    reducers:{
        getAllPigeons:(state,action)=>{
            state.pigeons = action.payload;
        
        }
    }
});
export const {getAllPigeons} = pigeonSlice.actions;
export default pigeonSlice.reducer;