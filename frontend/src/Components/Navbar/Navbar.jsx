

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

import React from 'react'
import { Button, Heading, Input } from '@chakra-ui/react'
import { SlLocationPin } from "react-icons/sl";
import { GrCart } from "react-icons/gr";
import { BiSearch } from "react-icons/bi";
import { IconContext } from "react-icons";  
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
    <div  className="navbar_header">
       <div className='header_row_1_1'>
        <div>
        <img src="https://www.1mg.com/images/tata_1mg_logo.svg" alt="" />
        </div>
        </div>
       <div className='header_row_1_2'>
        <div>
           <a href="#"> <Heading fontSize={'16px'}>Medicines</Heading></a>
        </div>
        <div >
        <a href="#"><Heading fontSize={'16px'}>LabTests</Heading></a>
        </div>
        <div >
        <a href="#"><Heading fontSize={'16px'}>LabTests</Heading></a>
        </div>
        <div >
        <a href="#"><Heading fontSize={'16px'}>LabTests</Heading></a>
        </div>
        <div >
        <a href="#"><Heading fontSize={'16px'}>LabTests</Heading></a>
        </div>
        <div >
        <a href="#"><Heading fontSize={'16px'}>LabTests</Heading></a>
        </div>
        <div >
            <Button padding={'0px 8px'} backgroundColor={'#FF6F61'} color='white'>Save more</Button>
        </div>
        </div>  
        
        <div className='header_row_1_3'>
        <div style={{"marginLeft":"10px","padding":"8px"}}>
            <Button fontSize={'14px'}>Login</Button>
              |
            <Button fontSize={'14px'}>SignUp</Button>
        </div>
        <div style={{"marginLeft":"10px","padding":"8px"}}>
            Offers
        </div>
        <div style={{"marginLeft":"10px","padding":"8px"}}>
           <h3 > <GrCart size={'30px'} /></h3>
        </div>
        <div>
          Need Help
        </div>
        
        </div>
    
    <div style={{display:"flex"}}>
      <div style={{"display":"flex","backgroundColor":"#F1F3F9"}}>
      <SlLocationPin/>
      <Input width={'20%'} type={"search"} backgroundColor={'#F1F3F9'}/>
      </div>
      <div style={{"display":"flex","border":"1px solid","width":"45%","borderRadius":"5px" ,"marginLeft":"10px"}}>
      <Input  type={"search"} padding={'0px 40px 0px 16px'} backgroundColor={'#F1F3F9'} placeholder="Search for Medicines and Health Products"/>
      <IconContext.Provider value={{'color':"blue"}}>
      <BiSearch />
      </IconContext.Provider>
      </div>
      <div style={{"display":"flex"}}>
        <div style={{"padding":"8px"}}>
          <p style={{"fontSize":"12px","color":"#808080"}}>Quick buy get 25% off on medicines</p>
          <button >Quick Order</button>
        </div> 
      </div>
    </div>
    </div>
    </div>
    
  )
}

export default Navbar

