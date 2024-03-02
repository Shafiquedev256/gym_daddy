import {BrowserRouter,Route,Routes} from "react-router-dom"
import Register from "./pages/registration" 
import HomePage from "./pages/home_page" 
import WorkoutPage from "./pages/workoutPage"
import {UserInfoProvider} from "./context/userInfo" 
import {Protect} from "./context/authentication"
function App() {
  

  return (
    <> 
    <UserInfoProvider>
    <BrowserRouter> 
    <Routes> 
    <Route path="/" element={<Protect><HomePage/></Protect>}/>
    <Route path="/register" element={<Register/>}/> 
    <Route path="/workout/:part" element={<Protect><WorkoutPage/></Protect>}/> 
    </Routes>
    </BrowserRouter>
    </UserInfoProvider>
    </>
  )
}

export default App
