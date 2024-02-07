import {ReactNode,useState} from "react" 
 

export const useRegister = (steps:ReactNode[])=>{
  const [currentIndex,setCurrentIndex]=useState(1) 
  const next = ()=>{ 
    if(currentIndex>=steps.length-1){
      
    }else{
    setCurrentIndex(i=>i+1)}
  }
  return {
    currentIndex,
    steps,
    next
  }
}