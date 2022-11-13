import React from "react";

import "./propductDel.css"
import {useParams} from "react-router-dom"
import { getProductsdetails } from "../../Redux/ProductDetails/action";
import {useDispatch,useSelector} from "react-redux"
import { useEffect } from "react";



const ProductDetails = () => {

const dispatch=useDispatch()

const {id}=useParams()

useEffect(() => {
   
    dispatch(getProductsdetails(id))
    
},[getProductsdetails,dispatch,id])

const {data} =useSelector((state) => state.DetailsReducer.products)

console.log(data)


// console.log(id)
const hendelADDToCart=(id) =>{



}

return(
  <div id="product">
      <div className="productdel">
        <div className="productimg">
          <img
            src="https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet.jpg"
            alt="a"
          />
          <img
            src="https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet.jpg"
            alt="a"
          />
          <img
            src="https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet.jpg"
            alt="a"
          />
          <img
            src="https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet.jpg"
            alt="a"
          />
          <img
            src="https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet.jpg"
            alt="a"
          />
          <img
            src="https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet.jpg"
            alt="a"
          />
        </div>
        <div className="producttop">
          <img src="https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet.jpg" />

        </div>
        <div className="productheding">
          <h1>
            
            Tata 1mg Women's Multivitamin, Zinc, Vitamin C, Calcium, Vitamin D,
            and Iron Immunity Booster Tablet
          </h1>

          <div
            style={{
              margin: "10px",
              fontSize: "15px",
              lineHeight: "17px",
              color: "#ff6f61",
            }}
          >
            Tata 1mg Healthcare Solutions Private Limited
          </div>
          <div
            className="rating"
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: "2x",
              bagroundColor: "#1aab2a",
              fontWeight: "bold",
              fontSize: "19px",
              margin: "10px",
            }}
          >
            3.5
          </div>
          <p
            style={{
              marginLeft: "80px",
              fontSize: "15px",
              marginTop: "-38px",
              color: "#ff6f61",
            }}
          >
            1023 Ratings & 185 Reviews
          </p>
          <div
            style={{
              margin: "10px",
              fontSize: "15px",
              lineHeight: "17px",
              color: "#ff6f61",
            }}
          >
            <img
              style={{ width: "30px", height: "30" }}
              src="https://onemg.gumlet.io/marketing/qubet60eokwth4ki5btj.png"
            />
            <p
              style={{
                marginTop: "-25px",
                fontSize: "15px",
                lineHeight: "17px",
                color: "#ff6f61",
                marginLeft: "40px",
              }}
            >
              Tata 1mg Healthcare Solutions Private Limited
            </p>
          </div>
          <div
            style={{ marginTop: "30px", fontSize: "20px", marginLeft: "10px" }}
          >
            <h3>Pack Size (2)</h3>
            <div
              style={{
                fontSize: "15px",
                marginLeft: "10px",
                display: "flex",
                gap: "20px",
              }}
            >
              <div className="bottel">
                <p>30 teblets</p>
                <p>₹225</p>
              </div>
              <div className="bottel">
                <p>30 teblets</p>
                <p>₹415</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "10px" }}>
            <h4>Product highlights</h4>
            <ul>
              <li>Supports bone, skin and eye health </li>
              <li>Prevents hormonal imbalance </li>
              <li>Aids in maintaining a healthy lifestyle </li>
              <li>Helps improve immunity</li>
              <li>Improves digestion and restores gut bacteria</li>
              <li>Improves energy levels and supports brain health </li>
              <li>
                A concoction of multi-vitamins, essential minerals, a women
              </li>
              <li>centric health blend, and pre and pro-biotics complex</li>
            </ul>
          </div>
        </div>

      
      <div className="produ">
      <div className='productcard'>
      <div
              className="div1"
              style={{
                
                width: "100%",
                height: "40px",
                alignItems: "center",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              <img
                style={{ marginLeft: "10px", width: "20px", height: "20px" }}
                src="https://www.1mg.com/images/social_cue.svg"
              />
              <p
                style={{
                  fontWeight: "400px",
                  fontSize: "15px",
                  lineHeight: "17px",
                  marginLeft: "50px",
                  marginTop: "-10px",
                }}
              >

                385 people bought this recently
              </p>
            </div>
            <form>
              <div style={{ fontSize: "20px", margin: "20px" }}>
                <input
                  style={{ marginLeft: "15px", height: "20px", width: "20px" }}
                  name="pcheck"
                  value="88"
                  type="radio"
                />
                &nbsp;&nbsp;
                <label htmlFor="price">₹ 500</label>
                <p
                  style={{
                    color: "#666666",
                    textDecoration: "line-through",
                    fontSize: "18px",
                    lineHeight: "23px",
                    marginTop: "-28px",
                    marginLeft: "110px",
                  }}
                >
                  ₹ 999
                </p>
                <p
                  style={{
                    fontWeight: "400",
                    color: "#42ba4f",
                    fontSize: "18px",
                    marginTop: "-23px",
                    marginLeft: "180px",
                  }}
                >
                  50% off
                </p>
              </div>


    <div style={{fontSize:"20px",margin: "20px"}}>
      <input  style={{ marginLeft: "15px", height: "20px", width: "20px" }}
        name="pcheck"  value="88" type="radio"/>&nbsp;&nbsp;
       <label htmlFor="price">₹ 700 
       
        </label>
        <img style={{ fontWeight:"500",color:"#42ba4f",fontSize:"16px",marginTop:"-25px",marginLeft:"100px"}}
        src="https://res.cloudinary.com/du8msdgbj/image/upload/v1613645053/marketing/phb2bz61etrdmuurfdoq.png" alt="" />
        <p style={{ fontWeight:"400",fontSize:"14px",marginTop:"-25px",marginLeft:"180px"}} >
        member price
free shipping and 5% Extra cashback
        </p>
      </div>
      <div  style={{margin:"20px",fontSize:"15px"}}>
        <label>Inclusive of all taxes</label>
        <br/>
        <select>
                 <option value="1">1 Bottel</option>
                <option value="2">2 Bottels</option>
                <option value="3">3 Bottels</option>
                <option value="4">4 Bottels</option>
                <option value="5">5 Bottels</option>
                <option value="6">6 Bottels</option>
                <option value="7">7 Bottels</option>
                <option value="8">8 Bottels</option>
                <option value="9">9 Bottels</option>
                <option value="10">10 Bottels</option>
                
              
        </select>&nbsp;&nbsp;  of 60 bottels
      </div>
      <div className="btn">
        <button className="btn1" type="submit" onClick={() => hendelADDToCart(id)}>ADD TO CART</button>
      </div>
      </form>
      </div>
      <div className="dates1">
            <p>
              
              <span>Earliest delivery by</span>{" "}
              <span className="contain"> 5pm, Tomorrow</span>{" "}
            </p>
            <p>
              Delivering to: <span> 110020, New Delhi </span>
            </p>
          </div>
        
          <div style={{ marginTop: "20px" }}>
            <img
              style={{ width: "500px" }}
              src="https://onemg.gumlet.io/58aeea63-bdc4-48ce-be10-0f5d31a99dfe_1667671530.jpg?w=410&h=94&format=auto"
            />
          </div>
          <div className="offer">
            <p>
              <span>Amazon Pay :</span> Pay with Amazon Pay and win up to ₹500
              cashback.
              <br />
              Valid only on minimum order value of ₹399. Valid till
              <br />
              30th November 2022.
            </p>
          </div>

        
    </div>
    </div>
    </div>
)

}
    
  


export default ProductDetails;
