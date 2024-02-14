import {configureStore} from "@reduxjs/toolkit" 
import maleReducer from "./workoutThunk"

export const store = configureStore({
  reducer:{
    maleWorkouts:maleReducer
  }
}) 

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType <typeof store.getState>