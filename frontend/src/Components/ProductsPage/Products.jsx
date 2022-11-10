import React, { useEffect } from "react";
import "./Products.css";
import { Sidebar } from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Product/action";
import { ProductsCart } from "./ProductsCart";
import { Flex, SimpleGrid } from "@chakra-ui/react";

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductReducer.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // console.log(products.data);

  return (
    <div className="main_container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="product">
        <div style={{ padding: "20px" }}>
          <Flex justifyContent={"space-between"}>
            <h1 style={{ fontWeight: "600", fontSize: "20px" }}>
              All Products
            </h1>
            <div>
              <Flex gap={2}>
                <h2 style={{ fontWeight: "700" }}>Sort By</h2>
                <select style={{ border: "1px solid grey", fontWeight: "600" }}>
                  <option value="">Relevance</option>
                  <option value="">Price: Low To High</option>
                  <option value="">Price: High To Low</option>
                  <option value="">Rating: Low To High</option>
                  <option value="">Rating: High To Low</option>
                </select>
              </Flex>
            </div>
          </Flex>
        </div>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing="20px">
          {products.data?.map((item) => {
            return <ProductsCart key={item._id} product={item} />;
          })}
        </SimpleGrid>
      </div>
    </div>
  );
};
