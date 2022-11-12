import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCarts } from "../../Redux/Cart/action";
import "./Cart.css";
import { SummaryItem } from "./SummaryItems";

export const Summary = () => {
  // const address = useSelector((state) => state.CartReducer.address);
  const { data } = useSelector((state) => state.CartReducer.carts);
  const dispatch = useDispatch();
  let date = new Date().toISOString().split("T")[0] ;
  // console.log(address);

  useEffect(() => {
    dispatch(getCarts());
  }, []);

  const totalPrice = data?.reduce(
    (acc, item) => acc + Number(item.strikedPrice * item.quantity),
    0
  );

  const discountPrice = data?.reduce(
    (acc, item) =>
      acc + Number([(item.discount / 100) * item.strikedPrice] * item.quantity),
    0
  );

  const handleChange = (change) => {};

  return (
    <div>
      <div className="container">Order Summary</div>
      <div className={"container"}>
        <div className="left-container">
          <p>Your Items</p>
          <div className="summ-arrive">
            <h6>Purchasing on {date} </h6>
            <p>1/1</p>
          </div>
          <div>
            {data?.map((item) => {
              return (
                <SummaryItem
                  key={item._id}
                  {...item}
                  handleChange={handleChange}
                />
              );
            })}
          </div>
          <hr />
        </div>
        <div className="right-container">
          <div className=" address-change">
            <h6>Select Address</h6>
            <Link to={"/address-page"}>
              <p>CHANGE</p>
            </Link>
          </div>
          <div className="health-div add-div">
            <h5 className="fw-700">HOME</h5>
            <h6>Rohit Manojkumar Belure</h6>
            <h6>7840949789</h6>
            <h6>Peth, Nilanga, Peth, Nilanga</h6>
            <h6>Latur, Maharashtra - 413521</h6>
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
              <p>₹ {totalPrice}</p>
            </div>
            <div className="pay-div">
              <p>Price Discount</p>
              <p>-₹ {discountPrice}</p>
            </div>
            <hr />
            <div className="pay-div">
              <p>Shipping Fee</p>
              <p>₹0</p>
            </div>
            <hr />
            <div className="pay-div fs-14">
              <p>To be paid</p>
              <p>₹ {totalPrice - discountPrice}</p>
            </div>
            <hr />
            <div className="pay-div bg-grey fs-14 col-grn">
              <p>Total Savings</p>
              <p>₹ {discountPrice}</p>
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
