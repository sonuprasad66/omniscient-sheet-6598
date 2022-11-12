import React from "react";
import { useState } from "react";
import { Login } from "../LoginSignupPage/Login";
import { Signup } from "../LoginSignupPage/Signup";

export const Navbar = () => {
  let [toggle,settoggle]=useState(false)
  let [signup,setsignup]=useState(false)
  return (<><button onClick={()=>settoggle(true)} >Login</button>
  <button onClick={()=>setsignup(true)} >Signup</button>
    <Login toggle={toggle} settoggle={settoggle} />
    <Signup toggle={signup} settoggle={setsignup}   />
    </>
  )
};
