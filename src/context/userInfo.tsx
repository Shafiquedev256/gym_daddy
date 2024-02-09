import {createContext,ReactNode,useState,useContext} from "react" 
type BodyPart = {
    part_name:string
  }

type Data = {
  gender: string,
  bodyparts:BodyPart[],
  goal:string,
  days:number,
  name:string,
  password:string
}

const INITIALDATA = {
  gender: "boy",
  bodyparts:[],
  goal:"",
  days:0,
  name:"",
  password:""
} 

type Context = {
  dataEl:()=>Data ,
  updateData:(update:Partial<Data>)=>void
} 
type Children = {
  children:ReactNode
}

const UserInfo = createContext<Context>({} as Context)

export const UserInfoProvider = ({children}:Children)=>{ 
  
const [data,setData]=useState<Data>(INITIALDATA)  
const updateData = (update:Partial<Data>)=>{
     setData({...data,...update})
   }  
   const dataEl = ()=>data

  return (
    <UserInfo.Provider value={{dataEl,updateData,}}>
    {children}
    </UserInfo.Provider>
    )
} 

export const useUserInfo = ()=>useContext(UserInfo)