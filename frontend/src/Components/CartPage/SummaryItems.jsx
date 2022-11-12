import "./Cart.css";
export const SummaryItem = ({
  productName,
  shortDesc,
  price,
  strikedPrice,
  quantity,
  handleChange,
}) => {
  const handleSubmit = (change) => {};

  return (
    <div className="Item-conatiner summaryItem" >
      <img
        src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/vsgjzvzkp3q8zlr2udm0.png"
        alt="icon"
        width={"40px"}
      />
      <div className="left-item-container">
        <h6>{productName}</h6>
        <p>{shortDesc}</p>
      </div>
      <div className="right-item-container">
        <h6>₹ {price}</h6>
        <p>MRP ₹{strikedPrice}</p>
      </div>
    </div>
  );
};
