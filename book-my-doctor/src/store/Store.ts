import { configureStore } from "@reduxjs/toolkit";
import detailReducer from"./DetailSlice";
import dataReducer from"./DataSlice";


export const store = configureStore({
    reducer:{
     details :detailReducer,
     datas :dataReducer
    },
})


export type RootState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;