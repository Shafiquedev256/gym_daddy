import {BrowserRouter,Route,Routes} from "react-router-dom"
import Register from "./pages/registration" 
import HomePage from "./pages/home_page" 
import WorkoutPage from "./pages/workoutPage"
import {UserInfoProvider} from "./context/userInfo"
function App() {
  

  return (
    <> 
    <UserInfoProvider>
    <BrowserRouter> 
    <Routes> 
    <Route path="/" element={<HomePage/>}/>
    <Route path="/register" element={<Register/>}/> 
    <Route path="/workout/:part" element={<WorkoutPage/>}/> 
    </Routes>
    </BrowserRouter>
    </UserInfoProvider>
    </>
  )
}

export default App
