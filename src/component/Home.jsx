import React from 'react'

import { Box, Container, HStack, Heading, VStack,Text } from '@chakra-ui/react'
import MyTypewriter from './Typewriter '
import { AiOutlineGithub,AiOutlineMail,AiFillLinkedin } from "react-icons/ai";
import { BsFillTelephoneFill,BsFillGeoAltFill } from "react-icons/bs";
import {Tilt} from "react-tilt"
import Typewriter from 'typewriter-effect';
const Home = () => {
  return (
    <div id="home" className="home-parent" >
      <Box >
   
      <Box mt="4%" >
      
       
          <Container maxW={{base:"300px",md:"container.sm"}} >
            <VStack spacing={"20"}>
          <Box fontSize={{base:"4xl",md:"6xl"}} className="typeWritter">Hi,I'm Diwakar Shamra</Box>
          <Text fontSize={"4xl"}><Typewriter
    options={{
    strings: ['A Mern Developer', 'World',"Apple","divide"],
    autoStart: true,
    loop: true,
  }}
/></Text>
          <Box id="my-intro">
            <MyTypewriter   text={"A passionate and detail-oriented Full Stack Web Developer with a solid understanding of front-end and back-end development  technologies. Possesses strong problem-solving skills and the ability to work collaboratively in a team environment. Dedicated   to continuously improving skills"}  delay={100} />
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