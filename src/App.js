import {BrowserRouter,Route,Routes} from "react-router-dom";
import HomePage from './components/LandingPage/HomePage'
import { useEffect } from "react";
import UserSignup from './components/User/Signup/SignUp.js'
import UserLogin from './components/User/Login/Login'
import LawyerLogin from './components/Lawyer/Login/Login'
import LawyerSignup from './components/Lawyer/Signup/Signup'
import Card from './components/Card.js'
import LawyerDashboard from "./components/Lawyer/LawyerDashboard/LawyerDashboard";
function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/userSignup" element={<UserSignup/>} />
          <Route path="/userLogin" element={<UserLogin/>} />
          <Route path="/lawyerLogin" element={<LawyerLogin/>} />
          <Route path="/lawyerSignup" element={<LawyerSignup/>} />
          <Route path="/Card" element={<Card/>}></Route>
          <Route path="/lawyerDashboard" element={<LawyerDashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;