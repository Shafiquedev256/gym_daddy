import {Header} from "./components/header" 
import Register from "./pages/registration"
import {UserInfoProvider} from "./context/userInfo"
function App() {
  

  return (
    <> 
    <UserInfoProvider>
    <Header/>
    <Register/> 
    </UserInfoProvider>
    </>
  )
}

export default App
