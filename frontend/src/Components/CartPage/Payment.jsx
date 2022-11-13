import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCarts } from "../../Redux/Cart/action";
import { useState } from "react";
import upiImage from "./images/upi.png";
import walletsImage from "./images/wallets.png";
import cardsImage from "./images/cards.png";
import netbankingImage from "./images/netbanking.png";
import payondeliveryImage from "./images/payondelivery.png";
import { useNavigate } from "react-router";

export const Payment = () => {
  const { data } = useSelector((state) => state.CartReducer.carts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  useEffect(() => {
    dispatch(getCarts());
  }, [dispatch]);

  useEffect(() => {
    setImage(upiImage);
  }, []);

  const totalPrice =
    data?.reduce(
      (acc, item) => acc + Number(item.strikedPrice * item.quantity),
      0
    ) || 0;

  const discountPrice =
    data?.reduce(
      (acc, item) =>
        acc +
        Number([(item.discount / 100) * item.strikedPrice] * item.quantity),
      0
    ) || 0;

  const handleImage = (name) => {
    if (name === "upi") setImage(upiImage);
    else if (name === "wallets") setImage(walletsImage);
    else if (name === "cards") setImage(cardsImage);
    else if (name === "netbanking") setImage(netbankingImage);
    else if (name === "payondelivery") setImage(payondeliveryImage);
    else setImage(upiImage);
  };

  return (
    <div className={"container"}>
      <div className="left-payment">
        <div className="pay-left">
          <div onClick={() => handleImage("upi")}>
            <img
              src="https://onemg.gumlet.io/image/upload/zf0de2srckrhx3fk8blm.png"
              width={"40px"}
              alt="logo"
            />
            <p>UPI</p>
          </div>
          <div onClick={() => handleImage("wallets")}>
            <img
              src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530172217/marketing/vvew3rcvwfjrhknifj1z.png"
              width={"40px"}
              alt="logo"
            />
            <p>WALLETS</p>
          </div>
          <div onClick={() => handleImage("cards")}>
            <img
              src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530172186/marketing/p45zk16fua8dmxany3up.png"
              width={"40px"}
              alt="logo"
            />
            <p>CARDS</p>
          </div>
          <div onClick={() => handleImage("netbanking")}>
            <img
              src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530172229/marketing/bsnk5fvtd4b6xffsvjdm.png"
              width={"40px"}
              alt="logo"
            />
            <p>NET BANKING</p>
          </div>
          <div onClick={() => handleImage("payondelivery")}>
            <img
              src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530172202/marketing/pyzcsicqsnwawi4yrpo7.png"
              width={"40px"}
              alt="logo"
            />
            <p>PAY ON DELIVERY</p>
          </div>
        </div>
        <div className="pay-right">
          <img src={image} alt="payment-logos" />
        </div>
      </div>
      <div className="right-container">
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
          <button
            onClick={() => {
              alert("Order Placed Successfully...");
              navigate("/");
            }}
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};
