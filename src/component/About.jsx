import { Container, Heading, Text, VStack,Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // specify animation duration in milliseconds
    });
  }, []);

  return (
    <div id="about" className="about section">
       
   <Box  id="user-detail-intro">
    <Container maxW="container.xl" color={"white"} >
     
      <VStack spacing={8} align="start" py={12}>
        <Heading size="lg" data-aos="fade-right">
          About Me
        </Heading>
        <Text data-aos="fade-right" color={'whiteAlpha.700'} fontStyle={"bold"} fontSize={{base:"1xl",md:"2xl"}}>
        My name is Diwakar Sharma, and I am a full-stack developer from Gorakhpur, Uttar Pradesh
        </Text>
       
        <Text data-aos="fade-right" color={'whiteAlpha.700'} fontStyle={"bold"} fontSize={{base:"1xl",md:"2xl"}}>
        I possess a broad range of technical skills, including proficiency in HTML, CSS, JavaScript, and Node.js. I have a deep understanding of database design, web services, and API integration
        </Text>
        <Text data-aos="fade-right" color={'whiteAlpha.700'} fontStyle={"bold"} fontSize={{base:"1xl",md:"2xl"}}>
       knowledge and dedication to producing high-quality work, I am confident in my ability to deliver results that exceed expectations. I am always looking for new challenges and opportunities to learn, and I am excited to continue growing as a developer
        </Text>
      </VStack>
    </Container>
    </Box>
    </div>

  );
};

export default About;
