import { Route, Routes } from "react-router-dom";
import PublicPage from './components/Auth/LoginPage/PublicPage.jsx';
import Register from "./components/Auth/Register.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function App() {
  const isAuthenticated = useSelector(state=> state.user.isAuthenticated)
  
  
  return (
    <div className=" min-h-screen bg-fixed top-0 left-0 z-[-2] bg-[#040a11]">

  <Routes>
    {
      isAuthenticated ? <Route path="/" element={<Home/>}/>: ""
      }
    <Route path="/" element={<PublicPage/>} />
  </Routes>

    </div>
  )
}

export default App
