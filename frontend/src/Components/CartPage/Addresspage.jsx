import "./Address.css";
import { Input, Stack, Box, Checkbox, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAddress } from "../../Redux/Cart/action";

export const Address = () => {
  const [flatNumber, setFlatNumber] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState("");
  const [locality, setLocality] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [box, setBox] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    const payload = {
      flatNumber,
      landmark,
      pincode,
      locality,
      city,
      state,
      customerName,
      mobileNumber,
      box,
    };

    dispatch(addAddress(payload));
    navigate("/summary-page");
  };

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
            onChange={(e) => setFlatNumber(e.target.value)}
          />
          <Input
            placeholder="Landmark (optional)"
            size="sm"
            width={"40rem"}
            onChange={(e) => setLandmark(e.target.value)}
          />
          <Input
            placeholder="Pincode"
            size="sm"
            width={"40rem"}
            onChange={(e) => setPincode(e.target.value)}
          />
          <Input
            placeholder="Locality"
            size="sm"
            width={"40rem"}
            onChange={(e) => setLocality(e.target.value)}
          />
          <Input
            placeholder="City"
            size="sm"
            width={"40rem"}
            onChange={(e) => setCity(e.target.value)}
          />
          <Input
            placeholder="State"
            size="sm"
            width={"40rem"}
            onChange={(e) => setState(e.target.value)}
          />
          <Input
            placeholder="Customer Name"
            size="sm"
            width={"40rem"}
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <Input
            placeholder="10 Digit Mobile Number"
            size="sm"
            width={"40rem"}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <Box display={"flex"} gap={"10px"}>
            <Checkbox
              // defaultChecked
              fontSize={"10px"}
              color={"#9E9E9E"}
              fontWeight={"600"}
              value="HOME"
              onChange={(e) => setBox(e.target.value)}
            >
              HOME
            </Checkbox>
            <Checkbox
              // defaultChecked
              fontSize={"12px"}
              color={"#9E9E9E"}
              fontWeight={"600"}
              value="OFFICE"
              onChange={(e) => setBox(e.target.value)}
            >
              OFFICE
            </Checkbox>
            <Checkbox
              fontSize={"12px"}
              color={"#9E9E9E"}
              fontWeight={"600"}
              value="OTHER"
              onChange={(e) => setBox(e.target.value)}
            >
              OTHER
            </Checkbox>
          </Box>
          <Box paddingLeft={"25rem"}>
            <Stack spacing={4} direction="row" align="center">
              <Link to={"/cart"}>
                <Button
                  color={"#FF6F61"}
                  backgroundColor={"white"}
                  size="lg"
                  width={"9rem"}
                >
                  CANCEL
                </Button>
              </Link>
              <Button
                colorScheme="white"
                backgroundColor={"#FF6F61"}
                size="lg"
                width={"9rem"}
                onClick={handleClick}
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
