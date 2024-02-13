import {useNavigate} from "react-router-dom"

type ComponentEl = {
  bg:string,
  part:string,
}


const Component = ({bg,part}:ComponentEl)=>{ 
  const navigate = useNavigate()
  return(
    <>
        <div className={`w-auto m-3 h-36 ${bg} bg-center bg-cover object-center relative rounded `} onClick={()=>navigate(`/workout/${part}`)}>
    <div className="text-3xl text-white bg-black h-[100%] rounded bg-opacity-40 text-center flex items-center justify-center"><span>{part}</span></div>
    </div>
    </>
    )
}


export const WorkoutMenu = ()=>{
  
  return (
    <> 
    <div className="mx-4 my-1 text-3xl font-light">Workout Plans</div>
    <div className="md:grid md:grid-cols-3">
    <Component bg="bg-[url('/src/assets/chest.jpeg')]" part="Chest" />
    <Component bg="bg-[url('/src/assets/arm.jpeg')]" part="Arm" />
    <Component bg="bg-[url('/src/assets/abs.jpeg')]" part="Abs" /> 
    <Component bg="bg-[url('/src/assets/back.jpeg')]" part="Back" /> 
    <Component bg="bg-[url('/src/assets/legs.jpeg')]" part="Legs" />  
    <Component bg="bg-red-500" part="Full body" /> 
    </div>
    </>
    )
}