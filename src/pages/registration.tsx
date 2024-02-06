import {Gender} from "../components/gender" 
import {Male} from "../components/bodypart/male" 
import {Female} from "../components/bodypart/female"  
import {MainGoal} from "../components/maingoal"  

 const Register = ()=>{
  
  return (
    <>
    <div className="w-screen h-screen bg-gray-100 md:flex md:flex-col md:justify-center md:items-center"> 
      <Gender/>  
      <Male/> 
      <Female/> 
      <MainGoal/>
    </div>
    </>
    )
} 

export default Register