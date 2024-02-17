import {ReactNode,useState} from "react" 




export const useRegister = (steps:ReactNode[])=>{  

  const [currentIndex,setCurrentIndex]=useState(0) 
  const next = ()=>{ 
 return setCurrentIndex(i=>i+1)
    
  } 
  const back = ()=>{
    return setCurrentIndex(i=>i-1)
  }
  return {
    currentIndex,
    steps,
    next,
    back
  }
}