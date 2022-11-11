import React from "react";
import { useState } from "react";
import "./Cart.css";
import { SummaryItem } from "./SummaryItems";

export const Summary = () => {
  const [items, setItems] = useState([
    {
      title:
        "Wellbeing Nutrition Melts into Vegan Vitamin B12 + Folate Oral Thin Strip Misty Orange Mint Sugar Free",
      description: "box of 30 disintegrating strips",
      mrpPrice: 699,
      price: 549,
      quantity: 1,
    },
  ]);

  const handleChange = (change) => {};

  return (
    <div>
      <div className="container">Order Summary</div>
      <div className={"container"}>
        <div className="left-container">
          <p>Your Items</p>
          <div className="summ-arrive">
            <h6>Arriving by Wed, 16 Nov</h6>
            <p>1/1</p>
          </div>
          <div>
            {items.map((item) => {
              return <SummaryItem {...item} handleChange={handleChange} />;
            })}
          </div>
          <hr />
        </div>
        <div className="right-container">
          <div className=" address-change">
            <h6>Select Address</h6>
            <p>CHANGE</p>
          </div>
          <div className="health-div add-div">
            <h5 className="fw-700">HOME</h5>
            <h6>Rohit Manojkumar Belure</h6>
            <h6>Rohit Manojkumar Belure</h6>
            <h6>Rohit Manojkumar Belure</h6>
            <h6>Rohit Manojkumar Belure</h6>
          </div>
          <div className="neocoins">
            <div className="neocoin-div1">
              <div className="left-neocoin-div1">
                <img
                  src="https://res.cloudinary.com/du8msdgbj/image/upload/v1645088829/210921_TataNeu_appicon_light_24px_circle_3_1x_vxwibw.png"
                  alt="neocoin"
                  width="30px"
                />
                <p>My NeuCoins</p>
              </div>
              <div className="right-neocoin-div1">
                <p>
                  Balance: <b>0 NeuCoin</b>
                </p>
              </div>
            </div>
            <hr />
            <div className="neocoin-div2">
              <h6>
                <b> 2.13 </b>NeuCoins to be earned on this order*
              </h6>
            </div>
          </div>
          <div className="payment-div">
            <div className="pay-div">
              <p>Item Total(MRP)</p>
              <p>₹699</p>
            </div>
            <div className="pay-div">
              <p>Price Discount</p>
              <p>-₹699</p>
            </div>
            <hr />
            <div className="pay-div">
              <p>Shipping Fee</p>
              <p>₹0</p>
            </div>
            <hr />
            <div className="pay-div fs-14">
              <p>To be paid</p>
              <p>₹549</p>
            </div>
            <hr />
            <div className="pay-div bg-grey fs-14 col-grn">
              <p>Total Savings</p>
              <p>₹150</p>
            </div>
          </div>
          <div className="checkout">
            <button>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </div>
  );
};
