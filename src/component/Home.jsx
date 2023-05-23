import { SimpleGrid ,Box, Container, HStack,Text, Heading, Button} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { FaGithubAlt, FaGithubSquare, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiLinkedin } from "react-icons/fi";
import Typewriter from "typewriter-effect"
import { VStack } from '@chakra-ui/react';
import MyTypewriter from "./TypeWriter2";
import HexagonProfilePic from './HexagonProfilePic';
import myimg from "../asset/profile.png"
import { BsFillTelephoneFill } from 'react-icons/bs';
const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div >
      <Container maxW={"container.lg"} mt={"20px"}>
<SimpleGrid columns={{base:1,md:2}} gap={10}>
  <Box >
  <VStack align="start" data-aos="fade-right">
   <Box> <Text color={'whiteAlpha.700'} fontStyle={"bold"} fontSize={{base:"2xl",md:"4xl"}}>Hello, It's Me</Text></Box>
    <Box id="user-detail-name"><Text  color={'whiteAlpha.900 '} fontStyle={"bold"} fontSize={{base:"3xl",md:"5xl"}}>Diwakar Sharma</Text></Box>
    <Box color={'whiteAlpha.700'} fontStyle={"bold"} fontSize={{base:"2xl",md:"4xl"}}>And I'm a<span style={{color:"cyan"}}><Typewriter
options={{
strings: ['Full Stack Web Developer', 'Mern Developer'],
autoStart: true,
loop: true,
}}
/></span></Box>
   <Box mt={2}><Button>SEE MY WORK</Button></Box>
   <Box>
    <HStack  mt={2} spacing={"7"}>
      <Box  id="contact-email"> <a  id="contact-email" href="https://diwakarsharma2216@gmail.com"><Box fontSize={"30px"} color={"cyan.100"}><SiGmail /></Box></a></Box>
      <Box id="contact-linkedin"> <a target="_blank" href='https://www.linkedin.com/in/diwakarsharma-fullstackdev/'> <Box fontSize={"30px"} color={"cyan.100"}><FiLinkedin /></Box></a></Box>
      <Box  id="contact-phone"> <a id="contact-phone" href="tel:+916394842216"><Box fontSize={"30px"} color={"cyan.100"}><BsFillTelephoneFill /></Box></a></Box>
      <Box  id="contact-github"> <a target="_blank" id="contact-github" href='https://github.com/Diwakarsharma2216'><Box fontSize={"30px"} color={"cyan.100"}><FaGithubSquare /></Box></a></Box>
    </HStack>
   </Box>
  </VStack>
</Box>


<Box textAlign={"center"} data-aos="fade-left" className="home-img">
  <HexagonProfilePic
    name="Diwakar Sharma"
    src={myimg}
  />

  </Box>
</SimpleGrid>
</Container>
    </div>
   
  )
}

export default Home



{/* <Container maxW={"container.lg"} mt={"20px"}>
<SimpleGrid columns={{base:1,md:2}} gap={10}>
  <Box border="2px solid blue">
  <VStack >
    <Box><Text  textAlign={"left"} color={'whiteAlpha.700'} fontStyle={"bold"} fontSize={{base:"1xl",md:"2xl"}}>Hello, It's Me</Text></Box>
    <Box><Text textAlign={"left"} color={'whiteAlpha.700'} fontStyle={"bold"} fontSize={{base:"1xl",md:"2xl"}}>Diwakar Sharma</Text></Box>
    <Box color={'whiteAlpha.700'} fontStyle={"bold"} fontSize={{base:"1xl",md:"2xl"}}>And I'm a<span style={{color:"cyan"}}><Typewriter
options={{
strings: ['Full Stack Web Developer', 'Mern Developer'],
autoStart: true,
loop: true,
}}
/></span></Box>
    <Box><MyTypewriter  text="A Diligent Full Stack Stack Developer, Developing websites using a variety of tools and technologies, including HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB. Eager to embrace opportunities that offer challenge and to build innovative, efficient, and user- friendly web applications that meet the needs of modern businesses."  /></Box>
  </VStack>
</Box>


<Box border="2px solid blue">
  <HexagonProfilePic
    name="John Doe"
    src={myimg}
  />

  </Box>
</SimpleGrid>
</Container> */}