import "./Cart.css";
export const Item = ({
  title,
  description,
  price,
  mrpPrice,
  quantity,
  handleChange,
}) => {
  const handleSubmit = (change) => {};

  return (
    <div className="Item-conatiner">
      <div className="left-item-container">
        <h6>{title}</h6>
        <p>{description}</p>
        <div className="remove-div">
          <img src="https://img.1mg.com/images/delete_icon.svg" alt="remove" />{" "}
          <p>Remove</p>
        </div>
      </div>
      <div className="right-item-container">
        <h6>₹ {price}</h6>
        <p>MRP ₹{mrpPrice}</p>
        <div className="quantity-div">
          <img
            src="https://www.1mg.com/images/minus-cart.svg"
            alt="minus"
            onClick={() => handleChange(-1)}
          />
          <p>{quantity}</p>
          <img
            src="https://www.1mg.com/images/plus-cart.svg"
            alt="plus"
            onClick={() => handleChange(1)}
          />
        </div>
      </div>
    </div>
  );
};
