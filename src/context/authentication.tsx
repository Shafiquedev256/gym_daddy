import {ReactNode} from "react" 
import {useNavigate} from "react-router-dom"
type Children = {
  children:ReactNode
}
export const Protect = ({children}:Children)=>{
  const navigate = useNavigate()
const localPlan = localStorage.getItem("plans"); 
if(!localPlan){
  navigate("/register",{replace:true})
}
  return children
}