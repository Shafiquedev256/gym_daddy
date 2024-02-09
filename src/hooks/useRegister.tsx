import {ReactNode,useState} from "react" 
import {useUserInfo} from "../context/userInfo"

export const useRegister = (steps:ReactNode[])=>{  
const dataEl = useUserInfo().dataEl();
  const [currentIndex,setCurrentIndex]=useState(0) 
  const next = ()=>{ 
   
    if(dataEl.gender==="Male"){
    return  setCurrentIndex(3)
    }else if(dataEl.gender==="Female"){
    return  setCurrentIndex(4)
    }
    
  setCurrentIndex(i=>i+1)
    
  } 
  const back = ()=>{
    if(currentIndex==3||currentIndex==4){
      setCurrentIndex(2)
    }else{setCurrentIndex(i=>i-1)}
  }
  return {
    currentIndex,
    steps,
    next,
    back
  }
}