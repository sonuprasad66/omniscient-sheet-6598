import React from "react";
import { useEffect } from "react"; 
import {Navigate} from "react-router-dom"
import { useState } from "react";
import "./Loginsignup.css"
import axios from "axios"
export const Signup = ({toggle,settoggle,change,setchange}) => {

  let [value,setvalue]=useState([{
    heading:"Health Related Queries?",
    about:"Consult our certified doctors from anywhere, anytime, and for free. We guarantee your privacy.",
    img:"https://www.1mg.com/images/login-signup/Health-Related-Queries.png"
  },{
    heading:"Lab Tests at Home",
    about:"Book any test from any lab. We'll collect the sample and send the reports. Save up to 80% every time.",
    img:"https://www.1mg.com/images/login-signup/Lab-Tests-at-Home.png"
  },
  {
    heading:"Medicines, Home Delivered",
    about:"Order any medicine or health product and we’ll deliver it for free. Enjoy discounts on everything.",
    img:"https://www.1mg.com/images/login-signup/Home-Delivery-of-Medicines.png"

  },{
    img:"https://www.1mg.com/images/login-signup/Know-Your-Medicines.png",
    heading:"Know Your Medicines",
    about:"View medicine information like usage, side effects and cheaper substitutes before you take them."
  },{
    img:"https://www.1mg.com/images/login-signup/Your-Go-To-Health-App.png",
    heading:"Make Healthcare Simpler",
    about:"Get medicine information, order medicines, book lab tests and consult doctors online from the comfort of your home."

  }])

  let [st,setst]=useState(false)
  let [info,setinfo]=useState()
  let [email,setemail]=useState("")
  let [password,setpassword]=useState("")
  let [count,setcount]=useState(1)
  let funn=async()=>{
    alert("start")
    let value={
      email,
      phone:info,
      password
    }
    console.log(value)
    axios.post("http://localhost:8080/signup",value).then((val)=>{console.log(val);alert("signup Sucessfull")}).catch((e)=>console.log(e))
    setchange(email)
  }
  useEffect(()=>{
    setInterval(()=>{
      document.getElementById('radio'+count).checked=true;
      setcount(count+1)
      if(count>4){
        setcount(1)
      }
    },5000)
  },[count])
  return (toggle)?(
    <>
      <div className={"modal "} id="modal">
        <div className="modal-header">
          <div className="alll">
          <input type="radio" name="radiobtn" id="radio1" />
            <input type="radio" name="radiobtn" id="radio2" />
            <input type="radio" name="radiobtn" id="radio3" />
            <input type="radio" name="radiobtn" id="radio4" />
            <input type="radio" name="radiobtn" id="radio5" />
            {
              value.map((elem,index)=>{
                return(
                  <div className={index==0?"alll2 first":"alll2"}>
                    <img src={elem.img} />
                    <h1  >{elem.heading}</h1>
                    <p>{elem.about}</p>
                  </div>
                )
              })
            }
          </div>
          <div className="manual">
            <label for="radio1" className="manual-btn"  ></label>
            <label for="radio2" className="manual-btn" ></label>
            <label for="radio3" className="manual-btn" ></label>
            <label for="radio4" className="manual-btn" ></label>
            <label for="radio5" className="manual-btn" ></label>

          </div>
        </div>
        <div className="modal-body">
        <div className="exit">
          <div></div>
        <button onClick={()=>{settoggle(false)}} data-close-button className="close-button">&times;</button>
        </div>
            {st==true?<div className="inner-body">
            <div>
            <h1 className="h11">Password</h1>
            <span className="style__text___2naEQ" ><span >Provide Password to{info}<button onClick={()=>setst(false)} style={{color:"#ff6f61"}}>Edit</button></span></span>
            </div>
            
            <div className="style__wrapper___EMT3C " >
              <label className="style__input-label___1kYYX"> password</label>
              <div className="style__input-wrapper___3kd0w" >
                <input onChange={(e)=>{setpassword(e.target.value)}} className="style__input___3NmkT" />
              </div>
            
              
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <label className="otpch" >Get OTP on SMS</label>
              <hr style={{height:"15px",width:"1px",background:"#9e9e9e",margin:"0px 10px"}}></hr>
              <label className="otpch" >Get OTP on Call</label>
              </div>
            <div className="innertwo">
              <a className="button-text" onClick={()=>{setst("emailpage")}} ><span >DONE</span></a>
              <div className="style__bottom-content___FTTVN"><div className="style__fh-40___C40iw"><span className="style__text___3XOlZ style__text-larger___2DsZQ style__d-f___25FFn"></span><div className="style__text___3XOlZ style__text-lighter___2G_Vn style__text-small___2Rh34 style__tnc-wrapper___3iYER"><div ><a href="/tnc"></a>  <a href="/privacypolicy"></a></div></div></div><div className="style__bottom-content___FTTVN"><div className="style__fh-20___1-IuS"></div><div className="style__link___rBZIG style__tnc-wrapper___3iYER"><span>Need Help? Get In Touch</span></div></div></div>
            </div>
            
          </div>:
          <div className="inner-body">
            {st=="emailpage"?<div className="inner-body">
            <div>
            <h1 className="h11">Enter your primary email id</h1>
            <span className="style__text___2naEQ" ><span >We are almost ready! Just need your email id to keep your account extra safe</span></span>
            </div>
            
            <div className="style__wrapper___EMT3C " >
              <label className="style__input-label___1kYYX">Enter Email ID or Mobile Number</label>
              <div className="style__input-wrapper___3kd0w" >
                <input onChange={(e)=>{setemail(e.target.value)}} required={true} className="style__input___3NmkT" />
              </div>
              
            </div>
            <div className="innertwo">
              <a className="button-text" onClick={()=>{funn();settoggle(false);change(true)}} ><span >Continue</span></a>
              <div className="style__bottom-content___FTTVN"><div className="style__fh-40___C40iw"><span className="style__text___3XOlZ style__text-larger___2DsZQ style__d-f___25FFn"><span></span></span><div className="style__text___3XOlZ style__text-lighter___2G_Vn style__text-small___2Rh34 style__tnc-wrapper___3iYER"><div >By Signing in, you agree to our </div><div ><a href="/tnc"><span className="style__tnc___3w0N1">Terms and Conditions</span></a> &amp; <a href="/privacypolicy"><span className="style__tnc___3w0N1">Privacy Policy</span></a></div></div></div><div className="style__bottom-content___FTTVN"><div className="style__fh-20___1-IuS"></div><div className="style__link___rBZIG style__tnc-wrapper___3iYER"><span>Need Help? Get In Touch</span></div></div></div>
            </div>
            
          </div>:
            <div>
          <div>
          <h1 className="h11">Sign Up</h1>
          <span className="style__text___2naEQ" ><span >Please enter your Mobile number to receive One Time Password (OTP)</span></span>
          </div>
          
          <div className="style__wrapper___EMT3C " >
            <label className="style__input-label___1kYYX">Enter Email ID or Mobile Number</label>
            <div className="style__input-wrapper___3kd0w" >
              <input type="number" onChange={(e)=>setinfo(e.target.value)} className="style__input___3NmkT" />
            </div>
            
          </div>
          <span className="style__text___2naEQ"  ><input type="checkbox" /><span >Are you a healthcare professional?</span></span>
          <div className="innertwo">
            <a className="button-text" onClick={()=>{setst(true)}} ><span >Continue</span></a>
            <div className="style__bottom-content___FTTVN"><div className="style__fh-40___C40iw"><span className="style__text___3XOlZ style__text-larger___2DsZQ style__d-f___25FFn"><span><span>Have an account?</span><span className="style__link___rBZIG">Login</span></span></span><div className="style__text___3XOlZ style__text-lighter___2G_Vn style__text-small___2Rh34 style__tnc-wrapper___3iYER"><div >By Signing in, you agree to our </div><div ><a href="/tnc"><span className="style__tnc___3w0N1">Terms and Conditions</span></a> &amp; <a href="/privacypolicy"><span className="style__tnc___3w0N1">Privacy Policy</span></a></div></div></div><div className="style__bottom-content___FTTVN"><div className="style__fh-20___1-IuS"></div><div className="style__link___rBZIG style__tnc-wrapper___3iYER"></div></div></div>
          </div></div>}
          
        </div>}
        </div>
      </div>
      <div id="overlay" onClick={()=>{settoggle(false)}} ></div>
    </>
  ):""
};
