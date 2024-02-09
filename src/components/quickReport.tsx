
export const QuickReport = ()=>{
  
  return(
    <div className="md:flex md:flex-row md:justify-between">
    <div className="bg-gray-100 py-5 px-2 m-4 rounded flex flex-row  justify-between items-center font-sans md:w-3/6">
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
       <div className="bg-gray-100 py-5 px-2 m-4 rounded flex flex-col justify-between items-center font-sans md:w-3/6">
       <div className="flex flex-row justify-between items-center w-[100%] font-bold text-sm my-2">
    <div>Week goal</div> 
    <div>0/4 days</div>
    </div>
    <div className="flex flex-row w-[100%] justify-between">
    <div  className="bg-white w-10 h-10 rounded-full flex items-center justify-center">4</div>
    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">5</div>
    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">6</div>
    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">7</div> 
    </div>
    </div>
    
    </div>
    )
} 
