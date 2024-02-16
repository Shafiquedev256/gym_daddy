import {useState} from "react"
import menuIcon from "../assets/menu-alt-02-svgrepo-com.svg" 
import {Exercise} from "../Redux/workoutThunk" 

type Props = {
  workout:Exercise
}

export const WorkoutDetails = ({workout}:Props)=>{
  const [open,setOpen] =useState(false)
  return(
    <>
  
        <img src={menuIcon} className="w-1/6" onClick={()=>setOpen(true)} />
 <div className={`fixed top-0 left-0 h-screen bg-black w-screen bg-opacity-30 ${open?"translate-x-0 ":"translate-x-full"} ` }>
 <div className=" h-screen w-screen ">
    <div className={`fixed bottom-0 bg-white pt-7 z-20 rounded-t-[20px] w-[100%] h-[80%] left-0 flex flex-col px-3 space-y-4 ${open ? "translate-x-px " : "translate-y-full"
} ease-in-out duration-500  `}> 
<span className=" fixed z-20 top-0 p-[0.5rem] right-0" onClick={()=>setOpen(false)}>close</span>
   <div className="font-bold text-center mt-4">{workout.exercise}</div>
   <div className="font-bold">Tools:<span className="font-bold text-sm text-gray-700 ml-6">{workout.tool}</span></div>
   <div className="font-bold">Tips: <span className="text-gray-700 text-sm ml-6">{workout.safetyTips}</span> </div> 
   <div className="font-bold">Reps: <span className="text-gray-700 text-sm ml-6">At least 5 reps (for 3 sets )</span> </div>
    </div>
    </div>
    </div>
    </>
    )
}