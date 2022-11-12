import { Box, Button, Input ,Text,Image} from "@chakra-ui/react";
import React from "react";
import './Footer.css'
import { FaFacebookSquare,FaTwitter ,FaYoutube,} from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { AiFillMediumSquare } from "react-icons/ai";
export const Footer = () => {
  return(
  <div>
    <Box border={'1px solid #eaeaea'} height="1px" left={'5%'} margin="2px auto" width={'90%'} zIndex="9999">
    </Box>
    <Box display={'flex'} alignItems="center" justifyContent={'center'}>
     <Box fontSize={'1.3rem'}>
      Get the link to download app
      <Box>
        
      </Box>
     </Box>
     <Box display={'flex'} alignItems="center" justifyContent={'center'} paddingInline="1rem">
        <Input type={'number'} placeholder="Enter Your Phone Number" id="Phone" padding="0 1rem" fontSize='1rem' border="1px solid #f1f3f9"></Input>
          {/* <Box w={'100%'} marginInline={'auto'} paddingInline="1rem" borderRadius={'0.5rem'} padding="1.5rem">
            <form>
              <div>
                <Input type={'number'} placeholder="Enter Your Phone Number"></Input>
              </div>
            </form>
          </Box> */}
          <Button display={'flex'} alignItems="center" justifyContent={'center'} fontSize="0.9rem" backgroundColor={'rgb(255, 111, 97)'} color='white' padding={'0 1rem'} margin="0px 12px">send link</Button>
        </Box>
    </Box>
    <Box className="footer_Chakra_ui_container">
      <Box className="footer_Chakra_inside">
        <Box className="each-box-footer">
          <Text fontWeight={'500'} fontSize="1.125rem" marginBottom={'0.5rem'}>Known Us</Text>
          <a href="#" className="footer_Chakra-each-link">About</a>
          <a href="#" className="footer_Chakra-each-link">Contact Us</a>
          <a href="#" className="footer_Chakra-each-link"> Press Coverage</a>
          <a href="#" className="footer_Chakra-each-link">Careers</a>
          <a href="#" className="footer_Chakra-each-link">Business Partnership</a>
          <a href="#" className="footer_Chakra-each-link">Become a Health Partner</a>
          <a href="#" className="footer_Chakra-each-link">Corporate Governance</a>
        </Box>
        <Box className="each-box-footer">
          <Text fontWeight={'500'} fontSize="1.125rem" marginBottom={'0.5rem'}>Known Us</Text>
          <a href="#" className="footer_Chakra-each-link">Our Policies</a>
          <a href="#" className="footer_Chakra-each-link">Privacy Policy</a>
          <a href="#" className="footer_Chakra-each-link">Terms and Conditions</a>
          <a href="#" className="footer_Chakra-each-link">Editorial Policy</a>
          <a href="#" className="footer_Chakra-each-link">Return Policy</a>
          <a href="#" className="footer_Chakra-each-link">IP Policy</a>
          <a href="#" className="footer_Chakra-each-link">Grievance Redressal Policy</a>
        </Box>
        <Box className="each-box-footer">
          <Text fontWeight={'500'} fontSize="1.125rem" marginBottom={'0.5rem'}>Our Services</Text>
          <a href="#" className="footer_Chakra-each-link">Order Medicines</a>
          <a href="#" className="footer_Chakra-each-link">Book Lab Tests</a>
          <a href="#" className="footer_Chakra-each-link">Consult a Doctor</a>
          <a href="#" className="footer_Chakra-each-link">Ayurveda Articles</a>
          <a href="#" className="footer_Chakra-each-link">Hindi Articles</a>
          <a href="#" className="footer_Chakra-each-link">Care Plan</a>
          
        </Box>
        <Box className="each-box-footer">
          <Text fontWeight={'500'} fontSize="1.125rem" marginBottom={'0.5rem'}>Connect</Text>
          <a href="#" className="footer_Chakra-each-link">Social Links</a>
          <Box display={'flex'} margin="8px 0px 0px" gap={'8px'}>
            <FaFacebookSquare marginRight={'16px'} fontSize="1.5rem"/>
            <FaTwitter fontSize="1.5rem"/>
            <FaYoutube fontSize="1.5rem"/>
            <BsLinkedin fontSize="1.5rem"/>
            <AiFillMediumSquare fontSize="1.5rem" />
          </Box>
        </Box>
        <Box className="each-box-footer">
          <Text fontWeight={'500'} fontSize="1.125rem" marginBottom={'0.5rem'}> Download App</Text>
          <a href="#" className="footer_Chakra-each-link"><Image src="	https://tata1mg-clone-nem201.vercel.app/static/media/playStore.e90b791f32fd288d86619c5edfde0096.svg" w={'144px'}/></a>
          <a href="#" className="footer_Chakra-each-link"><Image src="	https://tata1mg-clone-nem201.vercel.app/static/media/appleStore.aed5594bfaeebd7e873d6c126b8588f7.svg" w={'144px'}></Image></a>
        </Box>
      </Box>
    </Box>
  </div>
  );
};
