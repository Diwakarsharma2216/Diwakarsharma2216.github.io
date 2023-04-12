import { HStack, Text,Flex,Box,Icon } from '@chakra-ui/react'
import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Flex justify="space-around" bg="gray.600" color={"whiteAlpha.900"} h={"45px"} align={"center"}>
        <Box>
         <Text fontSize={{base:"2xl",md:"2xl"}}>Diwakar Sharma</Text>
        </Box>
        <Box display={{ base: 'none', md: 'block' }}>
          <HStack spacing='24px'>
          
            <Box>
              <Link  to="/" className="nav-link home">Home</Link></Box>
            <Box>   <Link to="/about" className="nav-link about">About</Link></Box>
            <Box>   <Link  to="/skill" className="nav-link skills">Skill</Link></Box>
            <Box>   <Link  to="/project" className="nav-link projects">Project</Link></Box>
            <Box>   <Link  to="/contact" className="nav-link contact">Contact</Link></Box>
            <Box>   <Link  to="/resume" className="nav-link resume">Resume</Link></Box>

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





 