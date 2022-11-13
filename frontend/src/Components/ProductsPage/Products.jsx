import React, { useEffect, useState } from "react";
import "./Products.css";
import { Sidebar } from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Product/action";
import { ProductsCart } from "./ProductsCart";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "./Pagination";

export const Products = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const { data } = useSelector((state) => state.ProductReducer.products);
  const [sortData, setSortData] = useState(data);

  useEffect(() => {
    if (location || data.length === 0) {
      let getProductsParams = {
        params: {
          brand: searchParams.getAll("brand"),
          discount: searchParams.getAll("discount"),
        },
      };
      // console.log(getProductsParams);
      dispatch(getProducts(getProductsParams));
    }
  }, [location.search]);

  const handelSelect = () => {};

  // let arr;
  // const handelSelect = (e) => {
  //   if (e === "rel") {
  //     setSortData(data);
  //   } else if (e === "plth") {
  //     arr = data.sort((a, b) => {
  //       if (a.price > b.price) return +1;
  //       return -1;
  //     });
  //     setSortData(arr);
  //   } else if (e === "phtl") {
  //     arr = data.sort((a, b) => {
  //       if (a.price > b.price) return -1;
  //       return +1;
  //     });
  //     setSortData(arr);
  //   } else if (e === "rlth") {
  //     arr = data.sort((a, b) => {
  //       if (a.ratings > b.ratings) return +1;
  //       return -1;
  //     });
  //     setSortData(arr);
  //   } else if (e === "rhtl") {
  //     arr = data.sort((a, b) => {
  //       if (a.ratings > b.ratings) return -1;
  //       return +1;
  //     });
  //     setSortData(arr);
  //   }
  // };

  return (
    <>
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
                  <select
                    onChange={(e) => handelSelect(e.target.value)}
                    style={{ border: "1px solid grey", fontWeight: "600" }}
                  >
                    <option value="rel">Relevance</option>
                    <option value="plth">Price: Low To High</option>
                    <option value="phtl">Price: High To Low</option>
                    <option value="rlth">Rating: Low To High</option>
                    <option value="rhtl">Rating: High To Low</option>
                  </select>
                </Flex>
              </div>
            </Flex>
          </div>
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="20px">
            {sortData?.map((item) => {
              return <ProductsCart key={item._id} product={item} />;
            })}
          </SimpleGrid>
        </div>
      </div>
      <div style={{ margin: "30px 0" }}>
        <Pagination />
      </div>
    </>
  );
};
