

export const useBackgroundimg = ()=>{
  const bgImg = {
chest:"bg-[url('/src/assets/chest.jpeg')]",
  arms:"bg-[url('/src/assets/arm.jpeg')]",
  abs:"bg-[url('/src/assets/abs.jpeg')]",
  legs: "bg-[url('/src/assets/legs.jpeg')]",
  back: "bg-[url('/src/assets/back.jpeg')]",
  fullbody:"bg-red-500",
  } 
  
  const background = (img:string)=>{
if(img==="Chest"){return bgImg.chest};
  if(img==="Arm"){return bgImg.arms};
  if(img==="Abs"){return bgImg.abs};
  if(img==="Back"){return bgImg.back};
  if(img==="Legs"){return bgImg.legs};
  if(img==="Fullbody"){return bgImg.fullbody}
  } 
  return {background}
}