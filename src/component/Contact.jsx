import { Box, Container, HStack, Heading } from '@chakra-ui/react'
import React from 'react'

import { ImPhone } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { SiGmail } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { MdOutlineShareLocation } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
const Contact = () => {
  return (
    <div id="contact" >
   <Heading textAlign={"center"}>Get IN TOUCH</Heading>
   <Container className="contact-me">
   <Box>
    <HStack fontSize={"55px"} textAlign={"center"} w={"auto"}>
      <Box><a id="contact-phone" href="tel:+916394842216"> <ImPhone/> </a></Box>
      <Box><a id="contact-github" href='https://github.com/Diwakarsharma2216'><VscGithub/></a></Box>
      <Box><a id="contact-email" href="https://diwakarsharma2216@gmail.com"><SiGmail/></a></Box>
      <Box ><a id="contact-linkedin" href='https://www.linkedin.com/in/diwakar-sharma-307056244/'><FiLinkedin/></a></Box>
      <Box><a href="#"><MdOutlineShareLocation/></a></Box>
      <Box><a href="#"><FaInstagram/></a></Box>
      
    </HStack>
   </Box>
   </Container>
    </div>
  )
}

export default Contact
