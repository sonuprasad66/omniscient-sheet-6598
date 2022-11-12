import "./Cart.css";

export const Item = ({
  productName,
  shortDesc,
  price,
  strikedPrice,
  quantity,
  _id,
  handleChange,
  handleDelete,
  discount,
}) => {
  return (
    <div className="Item-conatiner">
      <div className="left-item-container">
        <h6>{productName}</h6>
        <p>{shortDesc}</p>
        <div className="remove-div" onClick={() => handleDelete(_id)}>
          <img src="https://img.1mg.com/images/delete_icon.svg" alt="remove" />{" "}
          <p>Remove</p>
        </div>
      </div>
      <div className="right-item-container">
        <h6>₹ {price}</h6>
        <p>MRP ₹{strikedPrice}</p>
        <div className="quantity-div">
          <div disabled={quantity === 1} onClick={() => handleChange(_id, -1)}>
            <img
              src="https://www.1mg.com/images/minus-cart.svg"
              alt="minus"
              width={"70px"}
            />
          </div>
          <div>
            <p>{quantity}</p>
          </div>
          <div onClick={() => handleChange(_id, 1)}>
            <img
              src="https://www.1mg.com/images/plus-cart.svg"
              alt="plus"
              width={"70px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
