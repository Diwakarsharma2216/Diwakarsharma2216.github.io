import { Container, Heading, SimpleGrid,Box, Image, Text, Flex, Button} from '@chakra-ui/react'
import React from 'react'
import mylogo from "../assets/Profile.png"

const About = () => {
  return (
    <div id="about" class="about section">
  <Heading textAlign={"center"} mt="3%">About me</Heading>
  <Flex align={{base:"",md:"center"}}>
  <Container maxW={{base:"300px",md:"container.lg"}} border={"1px solid red"}  >
   
    <SimpleGrid columns={{base:"1",md:"2"}} spacing={20} >
      <Box m={"auto"}><Image
       borderRadius='full'
       maxH={"100%"}
       maxW={"100%"}
      
     
       boxSize={{base:"200px",md:"350px"}}
       src={mylogo}
     
       alt='Dan Abramov'
       /></Box>
      <Box><Text >Hi Everyone, I am Diwakar Sharma from Gorakhpur, Uttar Pradesh. I have completed my Higher Secondary Education from Mahatma Gandhi Inter College Gorakhpur , Uttar Pradesh. As a Full Stack Web Developer, I possess a broad range of technical skills, including proficiency in HTML, CSS, JavaScript, and Node.js. I have a deep understanding of database design, web services, and API integration, and I am committed to staying up-to-date with the latest trends and technologies in the field.</Text></Box>
    </SimpleGrid>
   
  </Container>
  </Flex>
  <Box textAlign={"center"}>
  <a  id="resume-link-2" href="https://drive.google.com/file/d/1Qn5scNPEUAdWKwEONBYBfNW392hOipla/view?usp=sharing" download>
  <Button mt="2%" colorScheme='teal'>Resume</Button>
  </a>
  </Box>
    </div>
  )
}

export default About
