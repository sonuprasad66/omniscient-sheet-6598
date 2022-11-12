import "./Address.css";
import { Input, Stack, Box, Checkbox, Button } from "@chakra-ui/react";

export const Address = () => {
  return (
    <div className="address-container">
      <div>
        <p>Add New Address</p>
      </div>
      <div className="body">
        <Stack spacing={3}>
          <Input
            placeholder="Flat Number, Building Name, Street/Locality"
            size="sm"
            width={"40rem"}
            height={"5rem"}
          />
          <Input placeholder="Landmark (optional)" size="sm" width={"40rem"} />
          <Input placeholder="Pincode" size="sm" width={"40rem"} />
          <Input placeholder="Locality" size="sm" width={"40rem"} />
          <Input placeholder="City" size="sm" width={"40rem"} />
          <Input placeholder="State" size="sm" width={"40rem"} />
          <Input placeholder="Customer Name" size="sm" width={"40rem"} />
          <Input
            placeholder="10 Digit Mobile Number"
            size="sm"
            width={"40rem"}
          />
          <Box display={"flex"} gap={"10px"}>
            <Checkbox
              defaultChecked
              fontSize={"10px"}
              color={"#9E9E9E"}
              fontWeight={"600"}
            >
              HOME
            </Checkbox>
            <Checkbox
              defaultChecked
              fontSize={"12px"}
              color={"#9E9E9E"}
              fontWeight={"600"}
            >
              OFFICE
            </Checkbox>
            <Checkbox
              defaultChecked
              fontSize={"12px"}
              color={"#9E9E9E"}
              fontWeight={"600"}
            >
              OTHER
            </Checkbox>
          </Box>
          <Box paddingLeft={"25rem"}>
            <Stack spacing={4} direction="row" align="center">
              <Button
                color={"#FF6F61"}
                backgroundColor={"white"}
                size="lg"
                width={"9rem"}
              >
                CANCEL
              </Button>
              <Button
                colorScheme="white"
                backgroundColor={"#FF6F61"}
                size="lg"
                width={"9rem"}
              >
                SAVE
              </Button>
            </Stack>
          </Box>
        </Stack>
      </div>
      <hr />
      <div className="terms">
        <p>
          Tata 1mg is a technology platform to facilitate transaction of
          business. The products and services are offered for sale by the
          sellers. The user authorizes the delivery personel to be his agent for
          delivery of the goods. For details read{" "}
          <span>terms and conditions.</span>
        </p>
        <p>
          *NeuCoins will be credited 7 days after your complete order is
          delivered in case of Products and in case of Lab Services NeuCoins
          will be credited within 24 hours from the time of generation of test
          report. NeuCoins will not be credited in case a return request is
          initiated for the order. **Coupon Discount value may change if the
          total order value changes. ***Items in your cart will always reflect
          the most recent price as compared to the prices in their product
          detail page
        </p>
      </div>
    </div>
  );
};
