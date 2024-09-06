import { Route, Routes } from "react-router-dom";
import PublicPage from './components/Auth/LoginPage/PublicPage.jsx';
import Register from "./components/Auth/Register.jsx";
function App() {
  return (
    <div className=" min-h-screen bg-fixed top-0 left-0 z-[-2] bg-[#040a11]">

  <Routes>
    <Route path="/" element={<PublicPage/>} />
    <Route path="/register" element={<Register/>}/>
  </Routes>

    </div>
  )
}

export default App
