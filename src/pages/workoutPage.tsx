import menuIcon from "../assets/menu-alt-02-svgrepo-com.svg" 
import {Exercise} from "../Redux/workoutThunk" 
import {useParams,Params} from "react-router-dom"
import {useGetWorkouts} from "../hooks/useGetworkouts.tsx"



const WorkoutPage = ()=>{
   const {part} = useParams<Params<string>>()
   const {getPart} = useGetWorkouts()
  
  return (
    <>
    <div>
   <div className="w-screen  h-36 bg-[url('/src/assets/legs.jpeg')] bg-center bg-cover object-center relative">
    <div className="text-3xl text-white bg-black h-[100%] bg-opacity-40 text-center flex items-center justify-center"><span>Chest</span></div>
    </div>
    <div>
    <div className=" p-3 border-0 border-b-2 border-b-gray-200 flex flex-col space-y-1">
    <span className=" text-2xl">{getPart(part)&&(getPart(part).length)} {part} Workouts</span> <span className="text-sm text-gray-900">We recommend at least 5 reps each exercise</span>
    </div> 
    
    
    <section>
    {
     getPart(part)&& (getPart(part).map((item:Exercise)=>{
        return(<div className=" flex flex-row-reverse  p-2 my-1 items-center justify-between ">
    <img src={menuIcon} className="w-1/6"/>
    <span className="w-5/6 font-bold border-0 border-b-[1px] p-6 border-b-gray-200 ">{item.exercise}</span>
    </div>)
      }))
    }
    </section>
    
    
    </div>
    </div>
    </>
    )
} 

export default WorkoutPage