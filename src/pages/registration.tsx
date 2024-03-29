import {useRegister} from "../hooks/useRegister";
import {Gender} from "../components/gender" ;
import {useNavigate} from "react-router-dom";
import {Chosengender} from "../components/bodypart/chosenPart";  
import {useUserInfo} from "../context/userInfo";
import {MainGoal} from "../components/maingoal"  ;
import {WorkoutDays} from "../components/workoutDays" ;
import {Confirm} from "../components/confirm" ;


 const Register = ()=>{ 
const navigate = useNavigate();
const {dataEl} = useUserInfo();
  const {steps,currentIndex,next,back} = useRegister([<Gender/>,<Chosengender/>,<WorkoutDays/>,<MainGoal/>,<Confirm/>])
    if(currentIndex===5){
      localStorage.setItem("plans",JSON.stringify(dataEl))
      navigate("/",{replace: true})} 
    
    
    
  return (
    <>
    {currentIndex>0&&(
    <div className="" onClick={()=>back()}>Back</div>)
    }
    <div className="w-screen h-screen bg-gray-100 md:flex md:flex-col md:justify-center md:items-center"> 
      <div className="bg-white md:h-[600px] h-screen  md:w-screen bg-white pt-6 flex flex-col items-center md:justify-center">  
     {steps[currentIndex]} 
      <button className="bg-blue-500 p-4 text-center text-white w-56 translate-y-[-30px] rounded hover:bg-blue-600" type="button" onClick={()=>next()}>{currentIndex===4?"Confirm":"Next"}</button>
      </div>
    </div> 
    </>
    )
} 

export default Register