import React from "react";
import { useState } from "react";
import "./Loginsignup.css"
import axios from "axios";
export const Login = ({toggle,settoggle}) => {
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
  let [info,setinfo]=useState("")
  let [password,setpassword]=useState("")
  let funn=async()=>{
    alert("start")
    let value={

      
      email:info,
      password:password

    }
    console.log(value)
    axios.post("http://localhost:8080/login",value).then((val)=>{console.log(val);alert("Login Successfull")}).catch((e)=>console.log(e))
  }
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
            <span className="style__text___2naEQ" ><span >Provide Password sent to{info}<button onClick={()=>setst(false)} style={{color:"#ff6f61"}}>Edit</button></span></span>
            </div>
            
            <div className="style__wrapper___EMT3C " >
              <label className="style__input-label___1kYYX"> password</label>
              <div className="style__input-wrapper___3kd0w" >
                <input onChange={(e)=>{setpassword(e.target.value)}} className="style__input___3NmkT" />
              </div>
            
              
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <label className="otpch" >Get password on SMS</label>
              <hr style={{height:"15px",width:"1px",background:"#9e9e9e",margin:"0px 10px"}}></hr>
              <label className="otpch" >Get password on Call</label>
              </div>
            <div className="innertwo">
              <a className="button-text" onClick={()=>{funn();settoggle(false)}} ><span >DONE</span></a>
              <div className="style__bottom-content___FTTVN"><div className="style__fh-40___C40iw"><span className="style__text___3XOlZ style__text-larger___2DsZQ style__d-f___25FFn"></span><div className="style__text___3XOlZ style__text-lighter___2G_Vn style__text-small___2Rh34 style__tnc-wrapper___3iYER"><div ><a href="/tnc"></a>  <a href="/privacypolicy"></a></div></div></div><div className="style__bottom-content___FTTVN"><div className="style__fh-20___1-IuS"></div><div className="style__link___rBZIG style__tnc-wrapper___3iYER"><span>Need Help? Get In Touch</span></div></div></div>
            </div>
            
          </div>:
          <div className="inner-body">
            <div>
            <h1 className="h11">Login</h1>
            <span className="style__text___2naEQ" ><span >Get access to your orders, lab tests &amp; doctor consultations</span></span>
            </div>
            
            <div className="style__wrapper___EMT3C " >
              <label className="style__input-label___1kYYX">Enter Email ID or Mobile Number</label>
              <div className="style__input-wrapper___3kd0w" >
                <input onChange={(e)=>{setinfo(e.target.value)}} className="style__input___3NmkT" />
              </div>
              
            </div>
            <div className="innertwo">
              <a className="button-text" onClick={()=>{setst(true)}} ><span >LOGIN</span></a>
              <div className="style__bottom-content___FTTVN"><div className="style__fh-40___C40iw"><span className="style__text___3XOlZ style__text-larger___2DsZQ style__d-f___25FFn"><span><span>New on 1mg? </span><span className="style__link___rBZIG">Sign Up</span></span></span><div className="style__text___3XOlZ style__text-lighter___2G_Vn style__text-small___2Rh34 style__tnc-wrapper___3iYER"><div >By logging in, you agree to our </div><div ><a href="/tnc"><span className="style__tnc___3w0N1">Terms and Conditions</span></a> &amp; <a href="/privacypolicy"><span className="style__tnc___3w0N1">Privacy Policy</span></a></div></div></div><div className="style__bottom-content___FTTVN"><div className="style__fh-20___1-IuS"></div><div className="style__link___rBZIG style__tnc-wrapper___3iYER"><span>Need Help? Get In Touch</span></div></div></div>
            </div>
            
          </div>}
        </div>
      </div>
      <div id="overlay" onClick={()=>{settoggle(false)}} ></div>
    </>
  ):""
};
