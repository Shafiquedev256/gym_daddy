import {useRegister} from "../hooks/useRegister"
import {Gender} from "../components/gender" 
import {Male} from "../components/bodypart/male" 
import {Female} from "../components/bodypart/female"  
import {MainGoal} from "../components/maingoal"  
import {WorkoutDays} from "../components/workoutDays"  



 const Register = ()=>{
  const {steps,currentIndex,next} = useRegister([<Gender/>,<Male/>,<Female/>,<MainGoal/>,<WorkoutDays/>])
  return (
    <>
    <div className="w-screen h-screen bg-gray-100 md:flex md:flex-col md:justify-center md:items-center"> 
      <div className="bg-white md:h-[600px] h-screen  md:w-screen bg-white pt-6 flex flex-col items-center md:justify-center">  
     {steps[currentIndex]}
      <button className="bg-blue-500 p-4 text-center text-white w-56 translate-y-[-30px] rounded hover:bg-blue-600" onClick={()=>next()}>Next</button>
      </div>
    </div>
    </>
    )
} 

export default Register