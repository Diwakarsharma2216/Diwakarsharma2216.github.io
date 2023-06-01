import React, { useEffect } from 'react'
import { Box, Container, HStack, Image, VStack,Flex, SimpleGrid ,Heading} from '@chakra-ui/react';
import { DiGithubBadge } from "react-icons/di";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { SiBootstrap, SiHtml5, SiMaterialui, SiRedux, SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaMdb } from "react-icons/fa";
import 'aos/dist/aos.css';
import AOS from 'aos';
const Project = () => {
  const logoarr=[{htmllogo:<SiHtml5 />},{csslogo:<SiCss3 />},{jslogo:<SiJavascript />},{react:<FaReact />},{charaui:<SiHtml5 />}]
  const Featuresarr=["Login","Signup","Sort","Filter","Cart","Payment"]
  const projectdata=[
    {img:"",title:"",des:"",logoarr,Featuresarr},
    {img:"",title:"",des:"",logoarr,Featuresarr},
    {img:"",title:"",des:"",logoarr,Featuresarr},
    {img:"",title:"",des:"",logoarr,Featuresarr},
   
  ]
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <div id="projects">
    <Heading data-aos="fade-left" textAlign={"center"} mt={"5"}  fontWeight={"extrabold"} color={"whiteAlpha.800"}>My Project</Heading>
    <Container maxW={"container.lg"}>
      {projectdata.map((el)=><Box
    w='100%'
    data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
    h={{base:"640px",md:"400px"}}
    bgGradient="linear(to-r, #9797ad, #142041)"
    borderRadius='xl'
    boxShadow='2xl'
    p={8}
    m="2.5"
    className="project-card"
  >
  <SimpleGrid columns={{base:1,md:2}} >
    <Box boxShadow={"dark-lg"}  ><Image src='https://camo.githubusercontent.com/07805558f1f04fe51185891f7aecec142c6fd531a92c226ed04021b5b5c030b1/68747470733a2f2f692e706f7374696d672e63632f643031516b7359622f53637265656e73686f742d39382e706e67'  height={{base:"200px",md:"350px"}}   alt="diwa"/></Box>
    <Box   mt={{base:"5",md:"1"}}  ml={{base:"1",md:"5"}} border={"2px solid grey"}>
      <VStack>
        <Box  color={"whiteAlpha.900"} fontWeight={"extrabold"} fontSize={"4xl"} className="project-title" >Apple Replica</Box>
        <Box color={"whiteAlpha.900"} fontWeight={"bold"} fontSize={"1.5xl"} className="project-description"  textAlign={"left"}>Apple Inc (Apple) designs, manufactures, and markets smartphones, tablets, personal computers (PCs), portable and wearable devices. The company also offers software related services, accessories, and third-party digital content and applications.</Box>
        <Box mt={"5"}>
          <HStack  className="project-tech-stack"  fontSize={"4xl"} color={"cyan.100"} spacing={6}>
              <Box boxShadow={"dark-lg"}>
                <Box fontSize={"2xl"}><FaReact /></Box>
                <Box fontSize={"20px"}>React</Box>
              </Box>
              <Box boxShadow={"dark-lg"}>
              <Box fontSize={"2xl"}><SiJavascript /></Box>
                <Box  fontSize={"20px"}>React</Box> 
                </Box>
              <Box boxShadow={"dark-lg"} >
              <Box fontSize={"2xl"} textAlign={"center"}><SiCss3 /></Box>
                <Box fontSize={"20px"}>React</Box>  
                </Box>
          </HStack>
        </Box>
        <Box>
          <HStack ml={"-25px"} mt={"2.5"} fontSize={"4xl"} color={"cyan"} spacing={6}>
            <Box className="project-github-link"><a href="https://github.com/Diwakarsharma2216/overrated-chicken-3237"><DiGithubBadge /></a></Box>
            <Box className="project-deployed-link"><a href="https://hev-en.vercel.app/"><BsBoxArrowUpRight /></a></Box>
          </HStack>
        </Box>
      
      </VStack>
    </Box>
  </SimpleGrid>
  
  </Box>)}
  
  </Container>
  </div>
  )
}

export default Project
