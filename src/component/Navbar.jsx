import { HStack, Text,Flex,Box,Icon } from '@chakra-ui/react'
import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div id="nav-menu" className="navbar">
      <Flex justify="space-around" bg="gray.600" color={"whiteAlpha.900"} h={"45px"} align={"center"}  position="fixed" top="0"
      w="100%">
        <Box>
         <Text className="nav-head" fontSize={{base:"2xl",md:"2xl"}}>Diwakar Sharma</Text>
        </Box>
        <Box display={{ base: 'none', md: 'block' }}>
          <HStack spacing='24px'>
          
            <Box>
              <a   className="nav-link home" href="/#home">Home</a></Box>
            <Box>   <a   className="nav-link about" href='/#about'>About</a></Box>
            <Box>   <a   className="nav-link skills" href='/#skills'>Skill</a></Box>
            <Box>   <a   className="nav-link projects" href='/#projects'>Project</a></Box>
            <Box>   <a   className="nav-link contact" href='/#contact'>Contact</a></Box>
            <Box>   <a  id="resume-link-1"  className="nav-link resume" href='https://drive.google.com/file/d/1Qn5scNPEUAdWKwEONBYBfNW392hOipla/view?usp=sharing' download >Resume</a></Box>

          </HStack>
        
        </Box>
         <Box display={{ base: 'block', md: 'none' }}>
        <Icon onClick={()=>alert("hello")} as={FaBars} color="white" boxSize={6} />
     </Box>
      </Flex>
    </div>
  )
}

export default Navbar





 