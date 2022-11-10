import React from "react";

import "./propductDel.css"
const ProductDetails = () => {

const addData=() =>{

}

  return (
    <div id='product'>
      <div className='productdel'>
      <div className='productimg'>
      <img src='https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet.jpg' />
      <img src='https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet.jpg' />
      <img src='https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet.jpg' />
      <img src='https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet.jpg' />
      <img src='https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet.jpg' />
      <img src='https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet.jpg' />
      </div>
      <div className='producttop'>   
      <img src="https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet.jpg" />
      
      </div>
      <div className='productheding'>
        <h1> Tata 1mg Women's Multivitamin, Zinc, Vitamin C, Calcium, Vitamin D, and Iron Immunity Booster Tablet</h1>
        

        <div style={{margin:"10px",fontSize:"12px",lineHeight:"17px",color:"#ff6f61"}}>
        TATA img
        </div>
          <div 
          className="rating"
          style={{ flexDirection:"row",alignItems:"center",borderRadius:"2x",bagroundColor:"#1aab2a",fontWeight:"bold",fontSize:"19px", margin:"10px"}}>
          3.5
        </div>
        <p style={{marginLeft:"50px" ,fontSize:"18px", marginTop:"-38px"}}>
        1023 Ratings & 185 Reviews
        </p> 
        <h4>Product highlights</h4>
        <ul>
          <li>Supports bone, skin and eye health </li>
          <li>Prevents hormonal imbalance </li>
          <li>Aids in maintaining a healthy lifestyle </li>
          <li>Helps improve immunity</li>
          <li>Improves digestion and restores gut bacteria</li>
          <li>Improves energy levels and supports brain health </li>
          <li>A concoction of multi-vitamins, essential minerals, a women</li>
          <li>centric health blend, and pre and pro-biotics complex</li>
          

        </ul>

      </div>
      
      <div className='productcard'>
        <div className="div1" style={{margin:"10px", width:"100%",height:"40px",alignItems:"center",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}>   
      <img style={{marginLeft:"10px",width:"20px",height:"10px"}}   src="https://www.1mg.com/images/social_cue.svg"/>
       <p style={{fontWeight:"400px",fontSize:"12px",lineHeight:"17px" ,marginLeft:"50px",marginTop:"-10px"}} >
                385 people bought this recently
              </p>
              </div>
       <form>
       <div style={{fontSize:"20px",margin: "30px"}}>
       <input  style={{ marginLeft: "15px", height: "20px", width: "20px" }}
        name="pcheck"  value="88" type="radio"/>&nbsp;&nbsp;
        <label htmlFor="price">500</label>
        <p style={{color:"#666666", textDecoration:"line-through",fontWeight:"400", lineHeight:"23px",fontSize:"16px", marginTop:"-27px", marginLeft:"100px"}} >
          999
        </p>
        <p style={{ fontWeight:"400",color:"#42ba4f",fontSize:"16px",marginTop:"-25px",marginLeft:"140px"}} >
          of 50%
        </p>
    </div>

    <div style={{fontSize:"20px",margin: "30px"}}>
      <input  style={{ marginLeft: "15px", height: "20px", width: "20px" }}
        name="pcheck"  value="88" type="radio"/>&nbsp;&nbsp;
       <label htmlFor="price">700 
       
        </label>
        <img style={{ fontWeight:"400",color:"#42ba4f",fontSize:"16px",marginTop:"-25px",marginLeft:"100px"}}
        src="https://res.cloudinary.com/du8msdgbj/image/upload/v1613645053/marketing/phb2bz61etrdmuurfdoq.png" alt="" />
        <p style={{ fontWeight:"400",fontSize:"16px",marginTop:"-25px",marginLeft:"180px"}} >
        member price
free shipping and 5% Extra cashback
        </p>
      </div>
      <div style={{margin:"30px",fontSize:"20px"}}>
        <label>Inclusive of all taxes</label>
        <br/>
        <select>
        <option value="1">1 Bottels</option>
                <option value="2">2 Bottels</option>
                <option value="3">3 Bottels</option>
                <option value="4">4 Bottels</option>
                <option value="5">5 Bottels</option>
                <option value="5">6 Bottels</option>
              
        </select>
      </div>
      <div className="btn">
        <button type="submit" onClick={addData}>ADD TO CART</button>
      </div>
            </form>

        

      </div>
      
      </div>
    </div>
  )
}

export default ProductDetails