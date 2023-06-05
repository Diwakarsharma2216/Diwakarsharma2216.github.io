import { Heading,Box,  Text, SimpleGrid, Container ,Flex} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { SiBootstrap, SiChakraui, SiFirebase, SiHtml5, SiRedux, SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";

import AOS from "aos";
import "aos/dist/aos.css";
const Skills = () => {
  const skilldata=[
    {logo:<FaReact/>,text:"React"},
    {logo:<SiJavascript/>,text:"Javascript"},
    {logo:<IoLogoNodejs/>,text:"Nodejs"},
    {logo:<SiTypescript/>,text:"Typescript"},
    {logo:<SiRedux/>,text:"Redux"},
    {logo:<SiMongodb/>,text:"Mongodb"},
    {logo:<SiExpress/>,text:"Express"},
    {logo:<SiHtml5/>,text:"Html5"},
    {logo:<SiBootstrap/>,text:"Bootstrap",},
    {logo:<SiCss3/>,text:"Css"},
    {logo:<SiChakraui/>,text:"Chakra-ui"},
    {logo:<SiFirebase/>,text:"Firebase"},

  ]
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <div id="skills">
    <div>
       <Heading textAlign={"center"}  fontWeight={"extrabold"} color={"whiteAlpha.800"} mt={"2px"} mb="2px" data-aos="fade-right">My Technical skills</Heading>
       <Container maxW={"container.xl"} mt={"10px"}>
       <SimpleGrid columns={{base:2,md:6}} gap={15} textAlign={"center"}>
      {skilldata.map((el,i)=><Box key={i} boxShadow={"dark-lg"}  className="skills-card">
        <Box data-aos="zoom-in">
           <Box className="skills-card-img" ml="25%" fontSize={"80px"} color={"cyan.100"}>{el.logo}</Box>
          <Text className="skills-card-name" fontSize={"20px"} fontWeight={"extrabold"} color={"whiteAlpha.600"}>{el.text}</Text>
        </Box>
      </Box>)}
      </SimpleGrid>
       </Container>
    </div>
    </div>
  )
}

export default Skills
