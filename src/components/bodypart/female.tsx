import female from "../../assets/[removal.ai]_edc6091f-34f9-4520-a824-dc52a1506c66-images-1.png"

export const Female = ()=>{
  
  return(
    <>
      <div className="bg-white md:h-[500px] h-screen  md:w-screen bg-white pt-6">
    <h1 className="text-center text-2xl font-light font-sans py-3">What would you like to work on?</h1>
    
    <div className="flex flex-row items-center justify-between md:justify-evenly">
    <div className="flex flex-col w-fit px-2 space-y-2" >
    <button className="py-2 border-[1px] border-black rounded w-20   text-left pl-2 md:w-32 hover:border-blue-600 hover:text-blue-600">Full body</button>
    <button className="py-2 border-[1px] border-black rounded w-20   text-left px-2 md:w-32 hover:border-blue-600 hover:text-blue-600">Arm</button> 
    <button className="py-2 border-[1px] border-black rounded w-20  text-left px-2  md:w-32 hover:border-blue-600 hover:text-blue-600">Abs</button>
    <button className="py-2 border-[1px] border-black rounded w-20  text-left px-2  md:w-32 hover:border-blue-600 hover:text-blue-600">Butt</button> 
    <button className="py-2 border-[1px] border-black rounded w-20   text-left px-2 md:w-32 hover:border-blue-600 hover:text-blue-600">Legs</button> 
    </div>
   <img src={female} className=" h-[320px] md:h-[360px]"/> 
   </div>
   
    </div>
    </>
    )
}