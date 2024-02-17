import {useUserInfo} from "../../context/userInfo"
import {Male} from "./male" 
import {Female} from "./female"  
export const Chosengender = ()=>{
const {dataEl} = useUserInfo();
if(dataEl().gender==="Male"){
  return (<Male/>)
}
  return(
    <> 
<Female/>
    </>
    )
}