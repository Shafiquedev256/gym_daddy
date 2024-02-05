

export const Header = ()=>{
  
  return(
    <>
    <div className="bg-red-600 text-white font-sans p-1 w-screenitems-center justify-between flex flex-row items-center hidden">
    <div className="font-bold text-2xl font-mono ml-2">GYM Daddy</div>
    <div className="md:flex md:flex-row-reverse md:items-center md:w-3/5 md:justify-evenly md:block hidden ">
    <span>menu</span>
    <span>account</span>
    <span>logout</span>
    </div> 
    <div className="md:hidden">Menu</div>
    </div>
    </>
    )
}