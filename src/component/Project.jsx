import React, { useEffect } from 'react'
import { Box, Container, HStack, Image, VStack,Flex, SimpleGrid ,Heading} from '@chakra-ui/react';
import { DiGithubBadge } from "react-icons/di";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { SiChakraui, SiHtml5 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import enageimg from "../asset/Project-Img/Enagse.png" 
import aero from "../asset/Project-Img/Aera-1.png"
import haven from "../asset/Project-Img/haven.png"
import creaditkarma from "../asset/Project-Img/HealthKarma.png"
import 'aos/dist/aos.css';
import AOS from 'aos';
const Project = () => {
  const logoarr=[{logo:<SiHtml5 />,text:"HTML"},{logo:<SiCss3 />,text:"Css"},{logo:<SiJavascript />,text:"Javascript"},{logo:<FaReact />,text:"React"},{logo:<SiChakraui />,text:"Chakraui"}]
  
  const Featuresarr=["Login","Signup","Sort","Filter","Cart","Payment"]
  const projectdata=[
    {img:haven,title:"Hevenly Heven",des:"Hevenly Heven Ecommerce Website This is an ecommerce website built for selling products online. The website provides a platform for customers to browse and purchase products conveniently from the comfort of their homes.",logoarr,Featuresarr
    ,github:"https://github.com/Diwakarsharma2216/overrated-chicken-3237",deploy:"https://hev-en.vercel.app/"},
    {img:enageimg,title:"EngageBay",des:"EngageBay provides businesses with the ability to automate various marketing and sales processes, allowing them to nurture leads, engage with customers, and track their interactions effectively. The platform integrates with popular third-party applications, such as Gmail, Outlook, Shopify, and WordPress, among others, to provide a seamless experience for users.",
    logoarr,Featuresarr,github:"https://github.com/Diwakarsharma2216/timely-sense-4784",deploy:"https://cheery-custard-0453cb.netlify.app/"},
    {img:aero,title:"AĒROPOSTALE",des:"Aéropostale designs and sells a wide range of clothing items, including t-shirts, hoodies, jeans, pants, skirts, dresses, and activewear. Their style is often associated with a casual, relaxed, and sporty aesthetic. The brand also offers accessories like hats, scarves, bags, and jewelry to complement their clothing collections.",logoarr,Featuresarr,github:"https://github.com/Diwakarsharma2216/guiltless-turkey-1550",deploy:"https://beamish-clafoutis-28511c.netlify.app/"},
    
    {img:creaditkarma,title:"Credit Karma",des:"Credit Karma is a popular website that offers free credit scores, credit monitoring, and personalized financial recommendations. It provides users with access to their credit reports from TransUnion and Equifax, as well as their VantageScore credit scores. Credit Karma also offers various tools and resources to help users understand and improve their credit profiles.",logoarr,Featuresarr,github:"https://github.com/Diwakarsharma2216/long-head-3582",deploy:"https://dribble-clone-woad.vercel.app/"},
   
  ]


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <div id="projects">
    <Heading data-aos="fade-left" textAlign={"center"} mt={"9"}  fontWeight={"extrabold"} color={"whiteAlpha.800"}>My Project</Heading>
    <Container maxW={"container.xl"}>
      {projectdata.map((el)=><Box
    w='100%'
    data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
    h={{base:"740px",md:"400px"}}
    bgGradient="linear(to-r, #9797ad, #142041)"
    borderRadius='xl'
    boxShadow='2xl'
    p={8}
    m="2.5"
    className="project-card"
  >
  <SimpleGrid columns={{base:1,md:2}} >
    <Box boxShadow={"dark-lg"}  ><Image src={el.img}  height={{base:"200px",md:"350px"}}   alt="diwa"/></Box>
    <Box   mt={{base:"5",md:"1"}}  ml={{base:"1",md:"5"}} border={"2px solid grey"}>
      <VStack>
        <Box  color={"whiteAlpha.900"} fontWeight={"extrabold"} fontSize={"4xl"} className="project-title" >{el.title}</Box>
        <Box color={"whiteAlpha.900"} fontWeight={"bold"} fontSize={"1.5xl"} className="project-description"  textAlign={"left"}>{el.des}</Box>
        <Box mt={"5"}>
          <HStack    fontSize={"4xl"} color={"cyan.100"} spacing={6}>
          <Box className="project-tech-stack">
            <SimpleGrid  columns={{base:3,md:5}} spacing={2} textAlign={"center"} >
             
            {
              logoarr.map((el)=> <Box boxShadow={"dark-lg"} >
              <Box textAlign={"center"} margin={"auto"} fontSize={"2xl"}>{el.logo}</Box>
              {/* <Box fontSize={"20px"}>{el.text}</Box> */}
            </Box>)
            
           
            }
         
             </SimpleGrid>
             </Box>
             
              {/* <Box boxShadow={"dark-lg"}>
              <Box fontSize={"2xl"}><SiJavascript /></Box>
                <Box  fontSize={"20px"}>Javascript</Box> 
                </Box>
              <Box boxShadow={"dark-lg"} >
              <Box fontSize={"2xl"} textAlign={"center"}><SiCss3 /></Box>
                <Box fontSize={"20px"}>CSS</Box>  
                </Box> */}
          </HStack>
        </Box>
        <Box>
          <HStack ml={"-25px"} mt={"2.5"} fontSize={"4xl"} color={"cyan"} spacing={6}>
            <Box className="project-github-link"><a href={el.github}><DiGithubBadge /></a></Box>
            <Box className="project-deployed-link"><a href={el.deploy}><BsBoxArrowUpRight /></a></Box>
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
