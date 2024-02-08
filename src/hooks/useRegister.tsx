import {ReactNode,useState} from "react" 
import {useUserInfo} from "../context/userInfo"

export const useRegister = (steps:ReactNode[])=>{  
const dataEl = useUserInfo().dataEl();
  const [currentIndex,setCurrentIndex]=useState(0) 
  const next = ()=>{ 
   
    if(dataEl.gender==="Male"){
    return  setCurrentIndex(1)
    }else if(dataEl.gender==="Female"){
    return  setCurrentIndex(2)
    }
    
  setCurrentIndex(3)
    
  } 
  const back = ()=>{
    if(currentIndex>=1){
      setCurrentIndex(i=>i-1)
    }
  }
  return {
    currentIndex,
    steps,
    next,
    back
  }
}