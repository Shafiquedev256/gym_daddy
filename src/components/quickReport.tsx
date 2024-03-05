import {useUserInfo} from "../context/userInfo" 

export const QuickReport = ()=>{
const {dataEl} = useUserInfo(); 
  return(
    <div className="md:flex md:flex-col md:items-center md:justify-between">
    <div className="bg-gray-100 py-5 px-4 m-4 rounded flex flex-row  justify-between items-center font-sans md:w-3/6">
    <div className="flex flex-col space-y-1 items-center">
    <span className="font-bold text-2xl my-2">0</span>
    <span className="font-bold text-sm">Workouts</span>
    </div>  
    
    <div className="flex flex-col space-y-1 items-center">
    <span className="font-bold text-2xl my-2">0</span>
    <span className="font-bold text-sm">KCAL</span>
    </div>  
    
    <div className="flex flex-col space-y-1 items-center">
    <span className="font-bold text-2xl my-2">0</span>
    <span className="font-bold text-sm">Minutes</span>
    </div> 
  
    </div> 
    
    {/* weekly goal report below*/}
       <div className="bg-gray-100 py-5 px-4 m-4 rounded flex flex-col justify-between items-center font-sans md:w-3/6">
       <div className="flex flex-row justify-between items-center w-[100%] font-bold text-xs my-2">
    <div>Week goal</div> 
    <div>0/{dataEl().days} days</div>
    </div>
    <div className="flex flex-row w-[100%] justify-between">
    <div  className="bg-gray-200 text-gray-500 font-bold w-10 h-10 rounded-full flex items-center justify-center">{dataEl().days}</div>
    <div className="bg-gray-200 text-gray-500 font-bold w-10 h-10 rounded-full flex items-center justify-center">{dataEl().days+1}</div>
    <div className="bg-gray-200 text-gray-500 font-bold w-10 h-10 rounded-full flex items-center justify-center">{dataEl().days+2}</div>
    <div className="bg-gray-200 text-gray-500 font-bold w-10 h-10 rounded-full flex items-center justify-center">{dataEl().days+3}</div> 
    </div>
    </div>
    
    </div>
    )
} 
