import {configureStore,combineReducers} from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import pigeonSlice from "./pigeonSlice";

const store = configureStore({
    reducer:{
//Slice
        user:userSlice,
        pigeon:pigeonSlice
    }
});

export default store;
