import {ReactNode} from "react" 
import {Navigate} from "react-router-dom"
type Children = {
  children:ReactNode
}
export const Protect = ({children}:Children)=>{
const localPlan = localStorage.getItem("plans"); 
if(!localPlan){
 return <Navigate to="/register" replace/>
}
  return children
}