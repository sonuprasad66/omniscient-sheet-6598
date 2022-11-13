import React from "react";
import "./Cart.css";
import { Item } from "./Item";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteCart, getCarts, updateCart } from "../../Redux/Cart/action";

export const Cart = () => {
  const { data } = useSelector((state) => state.CartReducer.carts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarts());
  }, [dispatch]);

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

  const handleChange = (id, change) => {
    let temp = data.filter((item) => (item._id === id ? item : null));
    let temp2 = temp[0].quantity + change;
    const payload = {
      quantity: temp2,
    };

    if (temp2 >= 1) {
      dispatch(updateCart(id, payload)).then((res) => {
        dispatch(getCarts());
      });
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteCart(id)).then((res) => {
      dispatch(getCarts());
    });
  };

  return (
    <div className={"container"}>
      <div className="left-container">
        <p>Items NOT Requiring Prescription</p>
        <div>
          {data !== undefined
            ? data.map((item) => {
                return (
                  <Item
                    key={item._id}
                    {...item}
                    handleChange={handleChange}
                    handleDelete={handleDelete}
                  />
                );
              })
            : null}
        </div>
        {/* <p>Deals from Dettol</p> */}
      </div>
      <div className="right-container">
        <div className="coupon-div">
          <img
            src="https://onemg.gumlet.io/image/upload/v1625657833/ekjkxafxcqqg0oinr3fu.png"
            alt="care-logo"
            width="90px"
          />
          <p>You can save extra ₹27 on this order</p>
          <p>Become a member</p>
          <p>
            Care plan membership ₹ 165{" "}
            <span style={{ "text-decoration": "line-through" }}>₹ 549</span> / 3
            months
          </p>
          <div className="coupon-button">
            <button>Know More</button>
            <button>Add to cart</button>
          </div>
          <hr />
          <div className="apply-coupon">
            <h4>Apply Coupon</h4>
          </div>
        </div>
        <div className="health-div">
          <div className="health-div1">
            <p>Check the health of your vital organs</p>
          </div>
          <div className="health-child">
            <div>
              <input type="checkbox" />
            </div>
            <div>
              <p>Book Good Health Silver Package for just ₹649</p>
              <p>
                Get the tests done easily from your home. This package will help
                you in identifying potential disorders and deficiencies at an
                early stage.
              </p>
              <p>Pay later on home sample collection</p>
            </div>
          </div>
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
              <b> 5.49 </b>NeuCoins to be earned on this order*
            </h6>
            <div className="neocoin-div2-div1">
              <img
                src="https://onemg.gumlet.io/image/upload/v1632494429/jyjhkjmghzvoxovlqmli.png"
                alt="icon"
                width="20px"
                background-color="#FFE0CC"
              />
              <p>Extra 27.45 NeuCoins for care Plan members cp</p>
              <img
                src="https://onemg.gumlet.io/image/upload/v1632494457/sleif8m2hf1wj1jp0ylp.png"
                alt="icon"
                width="20px"
              />
            </div>
            <h4>Add care plan to cart</h4>
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
          <div className="checkout-div">
            <p>Your delivery location</p>
            <h6>Latur</h6>
          </div>
          <Link to={"/address-page"}>
            <button>CHECKOUT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
