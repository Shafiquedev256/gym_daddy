import male from "../assets/[removal.ai]_db277104-9ace-4d59-9ec1-1b919aa79588-images-2.png"
import female from "../assets/[removal.ai]_edc6091f-34f9-4520-a824-dc52a1506c66-images-1.png"
export const Gender = ()=>{
  
  return(
    <>
    <div className="bg-white h-[500px] md:w-screen hidden">
    <h1 className="text-center text-2xl font-light font-sans pt-3">What is your gender?</h1>
    <div className="font-light text-sm mb-3 text-center w-[100%]">Let us know you better!</div>
    <div className="flex flex-row justify-between items-center bg-white md:justify-evenly"> 
    <div className=" hover:text-blue-600 opacity-40 flex flex-col items-center  hover:opacity-100  relative hover:translate-x-10 md:hover:translate-x-36 hover:w-64 w-44 h-auto">
   <img src={male} className="w-[100%] h-[240px]"/>
   <span className="font-bold  r">Male</span>
   </div> 
   
    <div className="h-fit hover:text-red-600 flex flex-col items-center   opacity-40 hover:opacity-100 hover:translate-x-[-50px] md:hover:translate-x-[-150px] hover:w-40 w-32">
   <img src={female} className="w-[100%]"/>  
   <span className="font-bold">Female</span>
   </div> 
    </div> 
    </div>
    </>
    )
}