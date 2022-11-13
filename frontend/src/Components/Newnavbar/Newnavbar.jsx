import React from 'react'

export default function Newnavbar() {
    
  return (
    <div>
      <div className="big-container">
        
        <div className="nav-bar">
            <div className="upper">
                
                <div className="logo">
                    <img src="https://www.1mg.com/images/tata_1mg_logo.svg" alt=""/>
                </div>

                <div className="navmid">
                    <div className="leftnav">
                        <div className="medicine">
                            MEDICINES
                        </div>
                        <div className="medicine">
                            LABTEST
                        </div>
                        <div className="medicine">
                            ASK DOCTOR
                        </div>
                        <div className="medicine">COVID-19</div>
                        <div className="medicine">AYURVEDA</div>
                    </div>

                    
                    <div className="rightnav">

                        <div className="login">
                            <p id="login" className="p-top" onClick="call()">Login</p>
                        </div>
                        <div className="line p-top" id="linein"></div>
                        <div className="sign" id="profileicone">
                            <p id="signup" className="signupf" onClick="call()">signup</p>



                        </div>
                        <div className="offer">
                            <p className="p-top">offer</p>
                        </div>
                        <div className="cart">
                            <img src="https://static.cure.fit/assets/images/cart-image.svg" alt=""/>
                        </div>
                        <div className="halp">
                            <p className="needhelp">Need Help</p>
                        </div>
                    </div>


                </div>



            </div>
            
            <div className="middle">
                <div className="location">
                    <input style={{border:"none",background:"#F1F4F6"}} type="text" className="locsearch marginforin" placeholder="New Delhi"/>
                </div>
                <div className="serach">
                    <input type="text" style={{border:"none",background:"#F1F4F6"}} className="searchprod marginforin" placeholder="Search for medicine and Health product"/>
                </div>
                <div className="quick">QUICK BUY! Get up to 25% off on medicines</div>
                <div className="but" style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
                    <p style={{marginRight:'17px'}}  className="uploa">Quick order</p>
                </div>

            </div>
           
            <div className="lower">
                <div className="dropdown1">
                    <div className="dropdown">

                        <a href="#">ALL MEDICINE</a>

                        <div className="dropdown-content">
                            <a href="https://blog.hubspot.com/">Blog</a>
                            <a href="https://academy.hubspot.com/">Academy</a>
                            <a href="https://www.youtube.com/user/hubspot">YouTube</a>
                        </div>
                    </div>

                    <div className="cont-nav">
                        <a href="#">ALL MEDICINE</a>
                    </div>
                    <div className="cont-nav">
                        <a href="#">ALL MEDICINE</a>
                    </div>
                    <div className="cont-nav">
                        <a href="#">ALL MEDICINE</a>
                    </div>
                    <div className="cont-nav">
                        <a href="#">ALL MEDICINE</a>
                    </div>
                    <div className="cont-nav">
                        <a href="#">ALL MEDICINE</a>
                    </div>
                    <div className="cont-nav">
                        <a href="#">ALL MEDICINE</a>
                    </div>
                    <div className="cont-nav">
                        <a href="#">ALL MEDICINE</a>
                    </div>
                    <div className="cont-nav">
                        <a href="#">ALL MEDICINE</a>
                    </div>
                    <div className="cont-nav">
                        <a href="#">ALL MEDICINE</a>
                    </div>
                </div>

            </div>

          
           

        </div>

        

        

     </div>

    </div>
  )
}
