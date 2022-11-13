import { useState } from "react";
import { Footer } from "./Components/Footer/Footer";
import { Login } from "./Components/LoginSignupPage/Login";
import Navbar from "./Components/Navbar/Navbar";
import Newnavbar from "./Components/Newnavbar/Newnavbar";

import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  let [login,setlogin]=useState(true)
  return (
    <div>

      {/* <Navbar /> */}

      <Newnavbar/>
      <AllRoutes />
      
      <Footer />
    </div>
  );
}

export default App;
