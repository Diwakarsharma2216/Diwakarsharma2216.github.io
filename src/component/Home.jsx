import React from 'react'
import Navbar from './Navbar'
import { Box, Container, HStack, Heading, VStack } from '@chakra-ui/react'
import Typewriter from './Typewriter '
import { AiOutlineGithub,AiOutlineMail,AiFillLinkedin } from "react-icons/ai";
import { BsFillTelephoneFill,BsFillGeoAltFill } from "react-icons/bs";
import {Tilt} from "react-tilt"
import AOS from 'aos';
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
const Home = () => {
  return (
    <div id="home" >
      <Box >
      <Navbar />
      <Box mt="4%" >
      
       
          <Container maxW={"container.sm"} textAlign={"center"}>
            <VStack spacing={"20"}>
          <Box fontSize={{base:"4xl",md:"6xl"}}>Hi,I'm Diwakar Shamra</Box>
          <Box> <Typewriter text={ "A mern Developer"}  delay={100} /></Box>
          <Box>
            <Typewriter text={"A passionate and detail-oriented Full Stack Web Developer with a solid understanding of front-end and back-end development  technologies. Possesses strong problem-solving skills and the ability to work collaboratively in a team environment. Dedicated   to continuously improving skills"}  delay={50} />
           </Box>
           <HStack spacing={"8"}>
           <Tilt options={{ max: 50 }}  style={{color:"green"}}>  <Box id="contact-github"   > <AiOutlineGithub fontSize="32px" /></Box></Tilt>
           <Tilt options={{ max: 50 }}  style={{color:"green"}}> <Box id="contact-phone"><BsFillTelephoneFill fontSize="32px" /></Box></Tilt>
           <Tilt options={{ max: 50 }}  style={{color:"green"}}>  <Box id="contact-email"><AiOutlineMail  fontSize="32px" /></Box></Tilt>
           <Tilt options={{ max: 50 }}  style={{color:"green"}}>  <Box  id="contact-linkedin"><AiFillLinkedin fontSize="32px" /></Box></Tilt>
           <Tilt options={{ max: 50 }}  style={{color:"green"}}> <Box><BsFillGeoAltFill fontSize="32px" /></Box></Tilt>
           </HStack>
     </VStack>
     </Container>
       
     
        </Box>
      </Box>
    </div>
  )
}

export default Home

// A passionate and detail-oriented Full Stack Web Developer with 
// a solid understanding of front-end and back-end development  
// technologies. Possesses strong problem-solving skills and the 
// ability to work collaboratively in a team environment. Dedicated   
// to continuously improving skills