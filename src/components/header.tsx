import {useState} from "react"

const SideMenu = ()=>{
  const [open,setOpen] =useState(false)
  return(
    <>
   
    <div onClick={()=>setOpen(true)}>
    Menu
    </div>
    <div className={`fixed top-0 bg-gray-600 z-10 rounded-b-[20px] w-[100%] h-[15rem] left-0 flex flex-col items-center justify-center text-2xl space-y-4 ${open ? "translate-x-0 " : "translate-y-[-100%]"
} ease-in-out duration-300`}> 
<span className=" fixed z-20 top-[0.5rem] right-[o.5rem]" onClick={()=>setOpen(false)}>close</span>
    <span>Report</span> 
    <span>About us</span> 
    <span>account</span> 
    </div>
    </>
    )
}



export const Header = ()=>{
  
  return(
    <>
    <div className="bg-red-600 text-white font-sans p-1 w-screenitems-center justify-between flex flex-row items-center relative">
    <div className="font-bold text-2xl font-mono ml-2">GYM Daddy</div>
    <div className="md:flex md:flex-row-reverse md:items-center md:w-3/5 md:justify-evenly md:block hidden ">
    <SideMenu/>
    <span>account</span>
    <span>logout</span>
    </div> 
    <div className="md:hidden">    <SideMenu/></div>
    </div>
    </>
    )
}