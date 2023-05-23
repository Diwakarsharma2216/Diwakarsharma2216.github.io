import { Box, Container, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import GitHubCalendar from 'react-github-calendar';
import { FaCode, FaGit } from 'react-icons/fa';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { BiUserVoice } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import ScrollTrigger from "react-scroll-trigger";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
const Github = () => {
  const [counter, setCouter] = useState(false)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // specify animation duration in milliseconds
    });
   
  }, []);

  

  return (
    <div id="github-section">
      <Heading textAlign={"center"} mt={"5"} data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" fontWeight={"extrabold"} color={"whiteAlpha.800"}>My Github</Heading>
     
     <ScrollTrigger onEnter={() => setCouter(true)} onExit={() => setCouter(false)}>
      <Container maxW={"container.lg"} mt={"10"}  >
        <Box  className="react-activity-calendar" fontWeight={"extrabold"} color={"whiteAlpha.600"} textAlign={"center"} ><GitHubCalendar  username="diwakarsharma2216"     /> </Box>
         <Flex  direction={{base:"column",md:"row"}} fontSize={"3xl"} mt={"2%"} fontWeight={"extrabold"} color={"whiteAlpha.800"} justify={"space-evenly"} textAlign={{base:"center"}}>
          <Box >
           
         {  counter &&  < CountUp   start={0} end={1200} duration={3} />}
         <span style={{fontSize:"15px"}}>+ Hours of Coding</span>
         </Box>
         <Box>
     { counter &&  <CountUp   start={0} end={1000} duration={3} />}
         <span style={{fontSize:"15px"}}>+ Hours of DSA</span>
         </Box>
         <Box>
      { counter &&  <CountUp  start={0} end={3} duration={3} />}
         <span style={{fontSize:"15px"}}>+ Mega-Project</span>
         </Box>
         <Box>
 { counter && <CountUp start={0} end={10} duration={3} />}
         <span style={{fontSize:"15px"}}> + Mini-Project</span>
         </Box>
        </Flex>
        {/* next part */}
        <Flex gap={{base:"1",md:"10"}}   direction={{base:"column",md:"row"}}>
          <Box h="170px" data-aos="fade-right" >
         <Image   h="170px"  id="github-streak-stats"  src="https://github-readme-streak-stats.herokuapp.com?user=diwakarsharma2216&theme=merko&hide_border=true&type=png)](https://git.io/streak-stats" />
          </Box>
          <Box  data-aos="fade-left" h="170px"  >
          <Image  h="170px"   id="github-top-langs"  src="https://github-readme-stats.vercel.app/api/top-langs/?username=diwakarsharma2216&theme=merko&hide_border=true&hide_progress=true" />
          </Box>
          <Box  h="170px" data-aos="fade-left"  >
          <Image  h="170px"   id="github-stats-card"  src="https://github-readme-stats.vercel.app/api?username=diwakarsharma2216&theme=merko&&hide_border=true&hide=contribs,prs" />
          </Box>
        </Flex>
      </Container>
      </ScrollTrigger>
    </div>
  )
}

export default Github
