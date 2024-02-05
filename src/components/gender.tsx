import male from "../assets/[removal.ai]_db277104-9ace-4d59-9ec1-1b919aa79588-images-2.png"
import female from "../assets/[removal.ai]_edc6091f-34f9-4520-a824-dc52a1506c66-images-1.png"
export const Gender = ()=>{
  
  return(
    <>
    <div className="flex flex-row justify-between md:justify-evenly">
    <div className=" hover:text-blue-600 opacity-40 flex flex-col items-center  hover:opacity-100  relative hover:translate-x-10 hover:w-64 w-44">
   <img src={male} className="w-[100%] h-56"/>
   <span className="font-bold  r">Male</span>
   </div> 
   
    <div className="h-fit hover:text-red-600 flex flex-col items-center   opacity-40 hover:opacity-100 hover:translate-x-[-30px] hover:w-40 w-32">
   <img src={female} className="w-[100%]"/>  
   <span className="font-bold">Female</span>
   </div> 
    </div>
    </>
    )
}