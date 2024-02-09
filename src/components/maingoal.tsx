import {useUserInfo} from "../context/userInfo"

export const MainGoal = ()=>{
const {updateData,dataEl} = useUserInfo();
  return(
    <> 
    {dataEl().goal}
      <div className="bg-white md:h-[500px] h-screen  md:w-screen bg-white pt-6 flex flex-col items-center justify-center">
    <h1 className="text-center text-2xl font-light font-sans py-3">What is your main goal ?</h1> 
    
    <div className="flex flex-col space-y-2 items-center">
    <button className="p-3   w-64 font-bold border-2 border-gray-100 hover:bg-blue-500 hover:text-white hover:border-white rounded" onClick={()=>updateData({goal:"Lose weight"})}>Lose weight</button>
    <button className="p-3   w-64 font-bold border-2 border-gray-100 hover:bg-blue-500 hover:text-white hover:border-white rounded" onClick={()=>updateData({goal:"Build muscles"})}>Build muscles</button>
    <button className="p-3   w-64 font-bold border-2 border-gray-100 hover:bg-blue-500 hover:text-white hover:border-white rounded" onClick={()=>updateData({goal:"Keep fit"})}>Keep fit</button>
    </div>
    
    </div>
    </>
    )
}