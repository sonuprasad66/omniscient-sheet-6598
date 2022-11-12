import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./Products.css"

export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialComponentsFilter = searchParams.getAll("brand");
  const [brand, setBrand] = useState(initialComponentsFilter || []);
  const handleFilterCheckbox = (e) => {
    const newCategory = [...brand];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setBrand(newCategory);
  };
  // console.log(category);

  useEffect(() => {
    if (brand) {
      let params = {};
      brand && (params.brand = brand);
      setSearchParams(params);
    }
  }, [brand, setSearchParams]);

  return (
    <div className="sidebar_container">
      <div className="filter">
        <div style={{ fontWeight: "700" }}>FILTERS</div>
        <div
          style={{
            fontWeight: "700",
            padding: "10px 0px",
            borderTop: "1px solid grey",
            marginTop: "10px",
          }}
        >
          BRANDS
        </div>
        <Flex justifyContent={"space-between"}>
          <div>
            <input
              type="checkbox"
              value="Tata 1mg"
              checked={brand.includes("Tata 1mg")}
              onChange={handleFilterCheckbox}
            />
            <label>Tata 1mg</label>
          </div>
          <h4>34</h4>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <div>
            <input
              type="checkbox"
              value="Other"
              checked={brand.includes("Other")}
              onChange={handleFilterCheckbox}
            />
            <label>Other</label>
          </div>
          <h4>25</h4>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <div>
            <input
              type="checkbox"
              value="Mom & World"
              checked={brand.includes("Mom & World")}
              onChange={handleFilterCheckbox}
            />
            <label>Mom & World</label>
          </div>
          <h4>10</h4>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <div>
            <input
              type="checkbox"
              value="MuscleXP"
              checked={brand.includes("MuscleXP")}
              onChange={handleFilterCheckbox}
            />
            <label>MuscleXP</label>
          </div>
          <h4>2</h4>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <div>
            <input
              type="checkbox"
              value="Horlicks"
              checked={brand.includes("Horlicks")}
              onChange={handleFilterCheckbox}
            />
            <label>Horlicks</label>
          </div>
          <h4>2</h4>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <div>
            <input
              type="checkbox"
              value="Jiva"
              checked={brand.includes("Jiva")}
              onChange={handleFilterCheckbox}
            />
            <label>Jiva</label>
          </div>
          <h4>2</h4>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <div>
            <input
              type="checkbox"
              value="Optimum Nutrition"
              checked={brand.includes("Optimum Nutrition")}
              onChange={handleFilterCheckbox}
            />
            <label>Optimum Nutrition</label>
          </div>
          <h4>2</h4>
        </Flex>
      </div>

      {/* ----------------------------Filter by discount---------------------------------------------- */}

      <div className="discount">
        <div
          style={{
            fontWeight: "700",
            padding: "10px 0px",
            borderTop: "1px solid grey",
            marginTop: "10px",
          }}
        >
          DISCOUNTS
        </div>
        <div>
          <Flex>
            <input type="checkbox" />
            <label>Reset Filter</label>
          </Flex>
        </div>
        <Flex justifyContent={"space-between"}>
          <div>
            <input type="checkbox" />
            <label>10% and above</label>
          </div>
          <h4>67</h4>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <div>
            <input type="checkbox" />
            <label>20% and above</label>
          </div>
          <h4>36</h4>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <div>
            <input type="checkbox" />
            <label>30% and above</label>
          </div>
          <h4>9</h4>
        </Flex>
      </div>
    </div>
  );
};
