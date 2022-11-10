import "./Cart.css";
export const Item = ({ title, description, price, mrpPrice, quantity }) => {
  return (
    <div className="Item-conatiner">
      <div className="left-item-container">
        <h6>{title}</h6>
        <p>{description}</p>
        <div>Remove</div>
      </div>
      <div className="right-item-container">
        <h6>₹ {price}</h6>
        <p>MRP ₹{mrpPrice}</p>
        <div>
          <p>1</p>
        </div>
      </div>
    </div>
  );
};
