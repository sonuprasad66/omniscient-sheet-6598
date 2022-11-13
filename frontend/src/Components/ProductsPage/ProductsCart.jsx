import { Flex } from "@chakra-ui/react";
import React from "react";
import "./Products.css";
import { ImStarEmpty } from "react-icons/im";
import { FaCartPlus } from "react-icons/fa";
import { addCart } from "../../Redux/Cart/action";
import { useDispatch } from "react-redux";
import { getProductsdetails } from "../../Redux/ProductDetails/action";

export const ProductsCart = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    dispatch(addCart(id));
  };

  const handleDetails = (id) => {
    dispatch(getProductsdetails(id));
  };

  return (
    <div className="productCart_container">
      <div className="product_image" onClick={() => handleDetails(product._id)}>
        <img src={product.imageUrl} alt="product" />
      </div>

      <div className="product_details">
        <div
          className="product_header"
          style={{
            height: "50px",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <h3 style={{ color: "#213253", fontSize: "14px" }}>
            {product.productName}
          </h3>
        </div>
        <div
          className="product_quantity"
          style={{ width: "100%", padding: "0 0 5px 0" }}
        >
          <p style={{ color: "#757575", fontSize: "12px" }}>
            {product.shortDesc}
          </p>
        </div>
        <div className="product_rating">
          <Flex gap={2}>
            <div
              style={{
                background: "#1AAB2A",
                padding: "2px 7px",
                borderRadius: "2px",
              }}
            >
              <Flex gap={1} ptb={1} style={{ fontWeight: "800" }}>
                <p style={{ color: "#FFFFFF", fontSize: "12px" }}>
                  {product.ratings}
                </p>
                <div style={{ color: "#FFFFFF", fontSize: "12px" }}>
                  <ImStarEmpty />
                </div>
              </Flex>
            </div>
            <p style={{ color: "#00000094", fontSize: "12px" }}>
              {product.numberOfRatings}
            </p>
          </Flex>

          <Flex
            gap={2}
            style={{
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            <div style={{ color: "#858585 " }}>
              MRP{"  "}
              <span style={{ textDecoration: "line-through" }}>
                ₹{product.strikedPrice}
              </span>
            </div>
            <div style={{ color: "#1AAB2A" }}>{product.discount}% OFF</div>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            style={{
              // border: "1px solid red",
              width: "100%",
              fontWeight: "600",
            }}
          >
            <h2>₹{product.price}</h2>
            <Flex
              gap={1}
              alignItems="center"
              className="add_btn"
              onClick={() => handleAddToCart(product._id)}
            >
              <FaCartPlus />
              ADD
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  );
};
