import male from "../../assets/[removal.ai]_db277104-9ace-4d59-9ec1-1b919aa79588-images-2.png"

export const Male = ()=>{
  
  return(
    <>
      <div className="bg-white md:h-[500px] h-screen  md:w-screen bg-white pt-6 hidden">
    <h1 className="text-center text-2xl font-light font-sans py-3">What would you like to work on?</h1>
    
    <div className="flex flex-row items-center justify-between md:justify-evenly">
    <div className="flex flex-col w-fit px-2 space-y-2" >
    <button className="py-2 border-[1px] border-black rounded w-16 text-center md:w-32 hover:border-blue-600 hover:text-blue-600">Chest</button>
    <button className="py-2 border-[1px] border-black rounded w-16 text-center md:w-32 hover:border-blue-600 hover:text-blue-600">Arms</button> 
    <button className="py-2 border-[1px] border-black rounded w-16 text-center md:w-32 hover:border-blue-600 hover:text-blue-600">Abs</button>
    <button className="py-2 border-[1px] border-black rounded w-16 text-center md:w-32 hover:border-blue-600 hover:text-blue-600">Back</button> 
    <button className="py-2 border-[1px] border-black rounded w-16 text-center md:w-32 hover:border-blue-600 hover:text-blue-600">Legs</button> 
    <button className="py-2 border-[1px] border-black rounded w-16 text-center md:w-32 hover:border-blue-600 hover:text-blue-600">Full body</button>
    </div>
   <img src={male} className=" h-[240px] md:h-[300px]"/> 
   </div>
   
    </div>
    </>
    )
}