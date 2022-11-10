import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";

export const ProductsCart = ({ product }) => {
  console.log(product);
  return <div>{product.brand}</div>;
};
