import { Box, Flex, Button } from "@chakra-ui/react";
import React from "react";

function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

export const Pagination = () => {
  return (
    <div
      style={{
        marginTop: "20px",
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.07) 0px 0px 7px 0px",
        height: "50px",
        width: "60%",
        margin: "auto",
        border: "1px solid red",
      }}
    >
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Box>
          <Button> Previous </Button>
          {createArrayOfSize(5)}
          <Button> Next </Button>
        </Box>
      </Flex>
    </div>
  );
};
