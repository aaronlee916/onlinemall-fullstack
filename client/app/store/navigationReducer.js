import { createSlice } from "@reduxjs/toolkit";

export default navigationReducer=createSlice({
    name:'navigation',
    initialState:{
        tabBar:'Phone'
    },
    reducers:{
        switchPhone:(state)=>{state.tabBar='Phone'},
        switchPC:(state)=>{state.tabBar='PC'},
        switchMisc:(state)=>{state.tabBar='Misc'},
        switchIoT:(state)=>{state.tabBar='IoT'},
        switchSupport:(state)=>{state.tabBar='Support'},
    }
})