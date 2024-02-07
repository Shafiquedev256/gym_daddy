

export const WorkoutDays = ()=>{
  
  return(
    <>
      <div className="bg-white md:h-[500px] h-screen  md:w-screen bg-white pt-6 flex flex-col items-center md:justify-center">
    <h1 className="text-center text-2xl font-light font-sans py-3">How many days do you  workout a week </h1>  
  <div className="font-light text-sm mb-3 text-center w-[100%]">We recommend at least 3 day per week </div> 
  
  <div className="grid grid-rows-2 grid-cols-2">
    <button className="py-2 border-[1px] border-black rounded w-20  m-2 text-center px-2 md:w-32 hover:border-blue-600 hover:text-blue-600 font-bold hover:bg-blue-500 hover:text-white">1</button> 
    <button className="py-2 border-[1px] border-black rounded w-20 m-2 text-center px-2  md:w-32 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-500 hover:text-white font-bold">2</button>
    <button className="py-2 border-[1px] border-black rounded w-20 m-2 text-center px-2  md:w-32 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-500 hover:text-white font-bold">3</button> 
    <button className="py-2 border-[1px] border-black rounded w-20 m-2  text-center px-2 md:w-32 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-500 hover:text-white m-2 font-bold">4</button> 
    <button className="py-2 border-[1px] border-black rounded w-20 m-2 text-center px-2  md:w-32 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-500 hover:text-white font-bold">5</button>
    <button className="py-2 border-[1px] border-black rounded w-20 m-2 text-center px-2  md:w-32 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-500 hover:text-white font-bold">6</button> 
    <button className="py-2 border-[1px] border-black rounded w-20   text-center px-2 md:w-32 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-500 hover:text-white m-2 font-bold">7</button> 
  </div>
  
    </div>
    </>
    )
}