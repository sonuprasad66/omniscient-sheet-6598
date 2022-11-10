import React from 'react'
import { Button, Heading, Input } from '@chakra-ui/react'
import { SlLocationPin } from "react-icons/sl";
import { GrCart } from "react-icons/gr";
import { BiSearch } from "react-icons/bi";
import { IconContext } from "react-icons";  
const Navbar = () => {
  return (
    <div>
    <div style={{"margin":"0px 108px","padding":"8px 16px" ,"border":"1px solid red"}}>
    <div style={{"display":"flex"}} className="nav-top-left">
        <img src="https://www.1mg.com/images/tata_1mg_logo.svg" alt="" />
        <div style={{"display":"flex","marginLeft":"40px"}} >
        <div style={{"padding":"8px"}}>
           <a href="#"> <Heading size={'md'}>Medicines</Heading></a>
        </div>
        <div style={{"padding":"8px"}}>
        <a href="#"><Heading size={'sm'}>Lab Tests</Heading></a>
        </div>
        <div style={{"padding":"8px"}}>
        <a href="#"><Heading size={'md'}>Lab Tests</Heading></a>
        </div>
        <div style={{"padding":"8px"}}>
        <a href="#"><Heading size={'md'}>Lab Tests</Heading></a>
        </div>
        <div style={{"padding":"8px"}}>
        <a href="#"><Heading size={'md'}>Lab Tests</Heading></a>
        </div>
        <div style={{"padding":"8px"}}>
        <a href="#"><Heading size={'md'}>Lab Tests</Heading></a>
        </div>
        <div style={{'marginLeft':"12px"}}>
            <Button padding={'0px 8px'} backgroundColor={'#FF6F61'} color='white'>Save more</Button>
        </div>
        
        </div>
        <div style={{"marginLeft":"10px","padding":"8px"}}>
            <button>Login</button>
             |
            <button>SignUp</button>
        </div>
        <div style={{"marginLeft":"10px","padding":"8px"}}>
            Offers
        </div>
        <div style={{"marginLeft":"10px","padding":"8px"}}>
           <h3 > <GrCart /></h3>
        </div>
    </div>
    </div>
    <div style={{"margin":"0px 119.6px","padding":"8px 16px 0px 32px ","border":"1px solid red" ,"display":"flex"}}>
      <div style={{"display":"flex","backgroundColor":"#F1F3F9"}}>
      <SlLocationPin/>
      </div>
      
      <Input width={'20%'} type={"search"} backgroundColor={'#F1F3F9'}/>
      <div style={{"display":"flex","border":"1px solid","width":"45%","borderRadius":"5px" ,"marginLeft":"10px", }}>
      <Input  type={"search"} padding={'0px 40px 0px 16px'} backgroundColor={'#F1F3F9'} placeholder="Search for Medicines and Health Products" />
      <IconContext.Provider value={{'color':"blue"}}>
      <BiSearch />
      </IconContext.Provider>
      </div>
      <div style={{"display":"flex"}}>
        <div style={{"padding":"8px"}}>
          <p style={{"fontSize":"12px","color":"#808080"}}>Quick buy get 25% off on medicines</p>
        </div> 
            
        <button >Quick Order</button>
      </div>
    </div>
    
    </div>
    
  )
}

export default Navbar
