import {BrowserRouter,Route,Routes} from "react-router-dom"
import {Header} from "./components/header" 
import Register from "./pages/registration" 
import HomePage from "./pages/home_page"
import {UserInfoProvider} from "./context/userInfo"
function App() {
  

  return (
    <> 
    <UserInfoProvider>
    <BrowserRouter> 
        <Header/>
    <Routes> 
    <Route path="/" element={<HomePage/>}/>
    <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </UserInfoProvider>
    </>
  )
}

export default App
