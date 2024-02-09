import {useUserInfo} from "../context/userInfo" 


export const WorkoutDays = ()=>{
const {updateData,dataEl} = useUserInfo(); 

  return(
    <>
    {dataEl().days}
      <div className="bg-white md:h-[500px] h-screen  md:w-screen bg-white pt-6 flex flex-col items-center md:justify-center">
    <h1 className="text-center text-2xl font-light font-sans py-3">How many days do you  workout a week </h1>  
  <div className="font-light text-sm mb-3 text-center w-[100%]">We recommend at least 3 day per week </div> 
  
  <div className="grid grid-rows-2 grid-cols-2">
    <button className="py-2 border-[1px] border-black rounded w-20  m-2 text-center px-2 md:w-32 hover:border-blue-600 hover:text-blue-600 font-bold hover:bg-blue-500 hover:text-white" onClick={()=>updateData({days:1})}>1</button> 
    <button className="py-2 border-[1px] border-black rounded w-20 m-2 text-center px-2  md:w-32 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-500 hover:text-white font-bold" onClick={()=>updateData({days:2})}>2</button>
    <button className="py-2 border-[1px] border-black rounded w-20 m-2 text-center px-2  md:w-32 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-500 hover:text-white font-bold" onClick={()=>updateData({days:3})}>3</button> 
    <button className="py-2 border-[1px] border-black rounded w-20 m-2  text-center px-2 md:w-32 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-500 hover:text-white m-2 font-bold" onClick={()=>updateData({days:4})}>4</button> 
    <button className="py-2 border-[1px] border-black rounded w-20 m-2 text-center px-2  md:w-32 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-500 hover:text-white font-bold" onClick={()=>updateData({days:5})}>5</button>
    <button className="py-2 border-[1px] border-black rounded w-20 m-2 text-center px-2  md:w-32 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-500 hover:text-white font-bold" onClick={()=>updateData({days:6})}>6</button> 
    <button className="py-2 border-[1px] border-black rounded w-20   text-center px-2 md:w-32 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-500 hover:text-white m-2 font-bold" onClick={()=>updateData({days:7})}>7</button> 
  </div>
  
    </div>
    </>
    )
}