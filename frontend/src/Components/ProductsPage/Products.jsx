import React, { useEffect } from "react";
import "./Products.css";
import { Sidebar } from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Product/action";
import { ProductsCart } from "./ProductsCart";
import { SimpleGrid } from "@chakra-ui/react";

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
        <SimpleGrid columns={[1, 2, 3, 4]} spacing="40px">
          {products.data?.map((item) => {
            return <ProductsCart key={item._id} product={item} />;
          })}
        </SimpleGrid>
      </div>
    </div>
  );
};
