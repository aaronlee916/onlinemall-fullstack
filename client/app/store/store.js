'use client'
import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigationReducer";
export const store = configureStore({
    reducer:{
        navigationReducer
    }
})