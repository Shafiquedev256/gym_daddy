import male from "../../assets/[removal.ai]_db277104-9ace-4d59-9ec1-1b919aa79588-images-2.png"
import {useUserInfo} from "../../context/userInfo"

type BodyPart = {
  part_name:string
  }

export const Male = ()=>{
const {updateData,dataEl} = useUserInfo();  

const handleClick = (part:BodyPart)=>{ 
  const filter = dataEl().bodyparts.filter(item=>item.part_name!==part.part_name)
  
updateData({bodyparts:[...filter,part]}) 
   } 

  return(
    <> 
     {JSON.stringify(dataEl().bodyparts)}
      <div className="bg-white md:h-[500px] h-screen  md:w-screen bg-white pt-6">
    <h1 className="text-center text-2xl font-light font-sans py-3">What would you like to work on?</h1>
    
    <div className="flex flex-row items-center justify-between md:justify-evenly">
    <div className="flex flex-col w-fit px-2 space-y-2" >
    <button className="py-2 border-[1px] border-black rounded w-16 text-center md:w-32 hover:border-blue-600 hover:text-blue-600" onClick={()=>{handleClick({part_name:"chest"})}}>Chest</button>
    <button className="py-2 border-[1px] border-black rounded w-16 text-center md:w-32 hover:border-blue-600 hover:text-blue-600" onClick={()=>{handleClick({part_name:"arm"})}}>Arms</button> 
    <button className="py-2 border-[1px] border-black rounded w-16 text-center md:w-32 hover:border-blue-600 hover:text-blue-600" onClick={()=>{handleClick({part_name:"Abs"})}}>Abs</button>
    <button className="py-2 border-[1px] border-black rounded w-16 text-center md:w-32 hover:border-blue-600 hover:text-blue-600" onClick={()=>{handleClick({part_name:"Back"})}}>Back</button> 
    <button className="py-2 border-[1px] border-black rounded w-16 text-center md:w-32 hover:border-blue-600 hover:text-blue-600" onClick={()=>{handleClick({part_name:"Leg"})}}>Legs</button> 
    <button className="py-2 border-[1px] border-black rounded w-16 text-center md:w-32 hover:border-blue-600 hover:text-blue-600">Full body</button>
    </div>
   <img src={male} className=" h-[240px] md:h-[300px]"/> 
   </div>
   
    </div>
    </>
    )
}