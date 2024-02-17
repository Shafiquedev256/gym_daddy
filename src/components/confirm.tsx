import {useUserInfo} from "../context/userInfo"

export const Confirm = ()=>{
const {dataEl} = useUserInfo();
  return(
    <> 
    <div className="bg-white h-[500px] md:w-screen">
<div>Gender:{dataEl().gender}</div>
<div>Body parts: {dataEl().bodyparts.map(item=><span className="p-2">{item.part_name},</span>)}</div>
<div>Goal: {dataEl().goal}</div>
<div>Weekly: {dataEl().days} days</div>
</div>
    </>
    )
}