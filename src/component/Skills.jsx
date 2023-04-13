import { Box,Container,SimpleGrid,Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {DiJavascript1, DiReact} from "react-icons/di"

import { Tilt } from 'react-tilt'
import AOS from "aos";
import "aos/dist/aos.css";
import GithubCalendarComponent from './Githubcalender';
const Skills = () => {
  const skilsdata=[
    {logo:<DiReact />,text:"React"},
    {logo:<DiReact />,text:"React"},
    {logo:<DiReact />,text:"React"},
    {logo:<DiReact />,text:"React"},
    {logo:<DiReact />,text:"React"},
    {logo:<DiReact />,text:"React"},
    {logo:<DiReact />,text:"React"},
    {logo:<DiReact />,text:"React"},
    {logo:<DiReact />,text:"React"},
    {logo:<DiReact />,text:"React"},
    {logo:<DiReact />,text:"React"},
    {logo:<DiReact />,text:"React"},
   
  ]
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="skills"  >
       <Box textAlign={"center"} mt="4%"><Text fontSize={{base:"4xl",md:"6xl"}} fontWeight={"bold"}>Skills</Text></Box>
        <Container maxW={{base:"350px",md:"container.xl"}} data-aos="fade-right" >
          <SimpleGrid columns={{base:2,md:6}}  gap={12 }  >
          {/* main box */}
             
              {skilsdata.map((el)=>{
           return    <Tilt options={{ max: 50 }}  style={{color:"green"}}>  <Box border={"2px solid red"}  borderRadius={"20px"}  h="200px" w={{base:"100px",md:"200px"}} data-aos="zoom-in" >
                  <Box m={"auto"} fontSize={"120px"}>{el.logo}</Box>
                  <Box>{el.text}</Box>
                </Box> </Tilt >
              })}
           
          </SimpleGrid>
        </Container>
        {/* here github calender */}
      <GithubCalendarComponent />
    </div>
  )
}

export default Skills
