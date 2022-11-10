import { Flex } from "@chakra-ui/react";
import React from "react";
import "./Products.css";
import { ImStarEmpty } from "react-icons/im";

export const ProductsCart = ({ product }) => {
  console.log(product);
  return (
    <div className="productCart_container">
      <div className="product_image">
        <img src={product.imageUrl} alt="product" />
      </div>

      <div className="product_details">
        <div
          className="product_header"
          style={{
            border: "1px solid red",
            height: "50px",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <h3 style={{ color: "#212121", fontSize: "14px" }}>
            {product.productName}
          </h3>
        </div>
        <div
          className="product_quantity"
          style={{ border: "1px solid red", width: "100%" }}
        >
          <p style={{ color: "#757575", fontSize: "12px" }}>
            {product.shortDesc}
          </p>
        </div>
        <div className="product_rating">
          <Flex gap={2} style={{ border: "1px solid red", width: "100%" }}>
            <div
              style={{
                background: "#1AAB2A",
                padding: "2px 7px",
                borderRadius: "2px",
              }}
            >
              <Flex gap={1} style={{ fontWeight: "800" }}>
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

          <Flex gap={2} style={{ border: "1px solid red", width: "100%" }}>
            <div>MRP ₹{product.strikedPrice}</div>
            <p>{product.discount}% OFF</p>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            style={{ border: "1px solid red", width: "100%" }}
          >
            <h2>₹{product.price}</h2>
            <h2>ADD</h2>
          </Flex>
        </div>
      </div>
    </div>
  );
};
