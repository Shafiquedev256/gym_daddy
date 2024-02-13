import menuIcon from "../assets/menu-alt-02-svgrepo-com.svg"

const WorkoutPage = ()=>{
  
  return (
    <>
    <div>
   <div className="w-screen  h-36 bg-[url('/src/assets/legs.jpeg')] bg-center bg-cover object-center relative">
    <div className="text-3xl text-white bg-black h-[100%] bg-opacity-40 text-center flex items-center justify-center"><span>Chest</span></div>
    </div>
    <div>
    <div className=" p-3 border-0 border-b-2 border-b-gray-200 flex flex-col space-y-1">
    <span className="font-bold">6 chest  Workouts</span> <span className="text-sm text-gray-900">We recommend at least 5 reps each exercise</span>
    </div> 
    
    <div className="border-0 border-b-2 border-b-gray-200 flex flex-row-reverse space-x-2 p-2 my-2 items-center ">
    <img src={menuIcon} className="w-1/6"/>
    <span className="w-5/6 font-bold">Dum bell Curl's</span>
    </div>
    
    </div>
    </div>
    </>
    )
} 

export default WorkoutPage