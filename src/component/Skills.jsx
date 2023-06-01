import { Heading,Box, Image, Text, SimpleGrid, Container ,Flex} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { SiBootstrap, SiHtml5, SiMaterialui, SiRedux, SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaMdb } from "react-icons/fa";
import CountUp from 'react-countup';
import AOS from "aos";
import "aos/dist/aos.css";
const Skills = () => {
  const skilldata=[
    {logo:<FaReact/>,text:"React",id:1},
    {logo:<SiJavascript/>,text:"Javascript",id:2},
    {logo:<IoLogoNodejs/>,text:"Nodejs",id:3},
    {logo:<SiTypescript/>,text:"Typescript",id:4},
    {logo:<SiRedux/>,text:"Redux",id:5},
    {logo:<SiMongodb/>,text:"Mongodb",id:6},
    {logo:<SiExpress/>,text:"Express",id:7},
    {logo:<SiHtml5/>,text:"Html5",id:8},
    {logo:<SiBootstrap/>,text:"Bootstrap",id:9},
    {logo:<SiCss3/>,text:"Css",id:10},
    {logo:<FaReact/>,text:"React",id:11},
    {logo:<SiJavascript/>,text:"Javascript",id:12},

  ]
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <div id="skills">
    <div>
       <Heading textAlign={"center"}  fontWeight={"extrabold"} color={"whiteAlpha.800"} data-aos="fade-right">My Technical skills</Heading>
       <Container maxW={"container.lg"} mt={"10px"}>
       <SimpleGrid columns={{base:2,md:6}} gap={15} textAlign={"center"}>
      {skilldata.map((el)=><Box key={el.id} boxShadow={"dark-lg"}  className="skills-card">
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
