import {createAsyncThunk,createSlice,PayloadAction} from "@reduxjs/toolkit" 

export type Exercise = {
exercise:string,
tool:string,
safetyTips:string
} 

export type Workouts = {
  chest:Exercise[],
  arms:Exercise[],
  abs:Exercise[],
  legs: Exercise[],
  back: Exercise[],
  fullbody:Exercise[]
}

type Initial = {
  allFemale:Workouts,
  pending:true|false,
  err:string
}

const initialState:Initial = {
  allFemale:{} as Workouts,
  pending:false,
  err:"",
  
}

export const getWorkouts = createAsyncThunk("fetch/workouts",()=>{
        const res = fetch("http://localhost:1234/gymdaddy/api/men/workouts").then(data => data.json());
    return res;
}) 

const workOutSlice = createSlice({
  name:"workouts",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(getWorkouts.pending,(state)=>{
      state.pending = true;
      state.err = "";
    }),
    builder.addCase(getWorkouts.fulfilled, (state,action:PayloadAction<Workouts>)=>{
      state.pending=false;
      state.err ="";
      state.allFemale= action.payload
    }),
    builder.addCase(getWorkouts.rejected, (state)=>{
      state.err = "Process failed please try again ";
      state.pending=false;
      state.allFemale ={}as Workouts
    })
  }
}) 

export default workOutSlice.reducer