import React, { useState } from 'react'
import { Login } from '../LoginSignupPage/Login'
import { Signup } from '../LoginSignupPage/Signup'
import style from "./Newnavbar.module.css"
import {Navigate, useNavigate} from "react-router-dom"
export default function Newnavbar() {
    let [login,setlogin]=useState(false)
    let [signup,setsingup]=useState(false)
    let [change,setchange]=useState("")
    let navigate=useNavigate()
  return (
    <>
    
    <div>
      <div className={style.big_container}>
        
        <div className={style.nav_bar}>
            <div className={style.upper}>
                
                <div className={style.logo}>
                    <img src="https://www.1mg.com/images/tata_1mg_logo.svg" alt=""/>
                </div>

                <div className={style.navmid}>
                    <div className={style.leftnav}>
                        <div onClick={()=>{navigate("/products")}} className={style.medicine}>
                            MEDICINES
                        </div>
                        <div className={style.medicine}>
                            LABTEST
                        </div>
                        <div className={style.medicine}>
                            ASK DOCTOR
                        </div>
                        <div className={style.medicine}>COVID-19</div>
                        <div className={style.medicine}>AYURVEDA</div>
                    </div>

                    
                    <div className={style.rightnav}>
                        {change==""?
                        <>
                       
                        <div className={style.login}>
                            <p  className={[style.p_top,style.login]} onClick={()=>{setlogin(true)}}>Login</p>
                        </div>
                        <div className={[style.line,style.linein] } ></div>
                        <div className={[style.sign,style.profileicone]} >
                            <p id="signup" className={style.signupf} onClick={()=>setsingup(true)}>signup</p>



                        </div>
                        </>:<div>{change}</div>}
                        <div className={style.offer}>
                            <p className={style.p_top}>offer</p>
                        </div>
                        <div onClick={()=>{navigate("/cart")}} className={style.cart}>
                            <img src="https://static.cure.fit/assets/images/cart-image.svg" alt=""/>
                        </div>
                        <div className={style.halp}>
                            <p className={style.needhelp}>Need Help</p>
                        </div>
                    </div>


                </div>



            </div>
            
            <div className={style.middle}>
                <div className={style.location}>
                    <input style={{border:"none",background:"#F1F4F6"}} type="text" className={[style.locsearch ,style.marginforin]} placeholder="New Delhi"/>
                </div>
                <div className={style.serach}>
                    <input type="text" style={{border:"none",background:"#F1F4F6"}} className={[style.searchprod ,style.marginforin]} placeholder="Search for medicine and Health product"/>
                </div>
                <div className={style.quick}>QUICK BUY! Get up to 25% off on medicines</div>
                <div className={style.but} style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
                    <p style={{marginRight:'17px'}}  className={style.uploa}>Quick order</p>
                </div>

            </div>
           
            <div className={style.lower}>
                <div className={style.dropdown1}>
                    <div className={style.dropdown}>

                        <a href="#">ALL MEDICINE</a>

                        <div className={style.dropdown_content}>
                            <a href="https://blog.hubspot.com/">Blog</a>
                            <a href="https://academy.hubspot.com/">Academy</a>
                            <a href="https://www.youtube.com/user/hubspot">YouTube</a>
                        </div>
                    </div>

                    <div className={style.cont_nav}>
                        <a href="#">ALL MEDICINE</a>
                    </div>
                    <div className={style.cont_nav}>
                        <a href="#">ALL MEDICINE</a>
                    </div>
                    <div className={style.cont_nav}>
                        <a href="#">ALL MEDICINE</a>
                    </div>
                    <div className={style.cont_nav}>
                        <a href="#">ALL MEDICINE</a>
                    </div>
                    <div className={style.cont_nav}>
                        <a href="#">ALL MEDICINE</a>
                    </div>
                    <div className={style.cont_nav}>
                        <a href="#">ALL MEDICINE</a>
                    </div>
                    <div className={style.cont_nav}>
                        <a href="#">ALL MEDICINE</a>
                    </div>
                    <div className={style.cont_nav}>
                        <a href="#">ALL MEDICINE</a>
                    </div>
                    <div className={style.cont_nav}>
                        <a href="#">ALL MEDICINE</a>
                    </div>
                </div>

            </div>

          
           

        </div>

        

        

     </div>

    </div>
    <Login toggle={login} settoggle={setlogin}    />
    <Signup toggle={signup} settoggle={setsingup} change={setlogin} setchange={setchange}  />
    </>
  )
}
