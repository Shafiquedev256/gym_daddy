import {QuickReport} from "../components/quickReport"
import {WorkoutMenu} from "../components/workoutMenu"
import {Header} from "../components/header" 

const HomePage = ()=>{
  
  return(
    <>
        <Header/>
    <div className="font-sans">
   <QuickReport/>
   <WorkoutMenu/>
    </div>
    </>
    )
} 

export default HomePage