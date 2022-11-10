import { Flex } from "@chakra-ui/react";
import React from "react";

export const Sidebar = () => {
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
            <input type="checkbox" />
            <label>Tata 1mg</label>
          </div>
          <h4>34</h4>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <div>
            <input type="checkbox" />
            <label>Other</label>
          </div>
          <h4>25</h4>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <div>
            <input type="checkbox" />
            <label>Other</label>
          </div>
          <h4>10</h4>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <div>
            <input type="checkbox" />
            <label>MuscleXP</label>
          </div>
          <h4>2</h4>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <div>
            <input type="checkbox" />
            <label>Horlicks</label>
          </div>
          <h4>2</h4>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <div>
            <input type="checkbox" />
            <label>Jiva</label>
          </div>
          <h4>2</h4>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <div>
            <input type="checkbox" />
            <label>Optimum Nutrition</label>
          </div>
          <h4>2</h4>
        </Flex>
      </div>
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
