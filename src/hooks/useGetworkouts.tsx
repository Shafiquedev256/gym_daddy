import { useSelector, useDispatch } from "react-redux";   
import { RootState, AppDispatch } from "../Redux/store";   
import {getWorkouts} from "../Redux/workoutThunk" 
import {useEffect} from "react" 


export const useGetWorkouts = ()=>{
const dispatch = useDispatch<AppDispatch>()
  const chest  = useSelector((state:RootState)=>state.maleWorkouts.allFemale.chest);
const arm  = useSelector((state:RootState)=>state.maleWorkouts.allFemale.arms);
const abs  = useSelector((state:RootState)=>state.maleWorkouts.allFemale.abs);
const back  = useSelector((state:RootState)=>state.maleWorkouts.allFemale.back);
const legs  = useSelector((state:RootState)=>state.maleWorkouts.allFemale.legs)
const fullbody  = useSelector((state:RootState)=>state.maleWorkouts.allFemale.fullbody)
  
useEffect(()=>{
   dispatch(getWorkouts())
 },[])  
 
const getPart = ((part:any)=>{
  if(part==="Chest"){return chest};
  if(part==="Arm"){return arm};
  if(part==="Abs"){return abs};
  if(part==="Back"){return back};
  if(part==="Legs"){return legs};
  if(part==="Fullbody"){return fullbody}
  return fullbody
})
 
 return {
   getPart
 }
}