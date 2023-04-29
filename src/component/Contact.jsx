import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

export default function ContactUs() {
  return (
    <Container bg="#6a82ca" maxW="container.lg" mt={0} centerContent overflow="hidden" mb={{base:"1vh"}}>
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                        +91-6394842216
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                       diwakarsharam2216@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                        Gorakhur, Uttar Pradesh
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name" >
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}



// import React, { useEffect, useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { Box, Container, HStack, Heading, SimpleGrid, VStack,Text, Link } from '@chakra-ui/react';
// import { ImPhone } from "react-icons/im";
// import { VscGithub } from "react-icons/vsc";
// import { SiGmail } from "react-icons/si";
// import { FiLinkedin } from "react-icons/fi";
// import { MdOutlineShareLocation } from "react-icons/md";
// import AOS from 'aos';
// import 'aos/dist/aos.css'
// export const ContactUs = () => {
//   const form = useRef();
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // specify animation duration in milliseconds
//     });
//   }, []);
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_e4ez12f', 'template_5z4eahg', form.current, 'gCfCeDX7MTECKKdoq')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <Container maxW={"container.lg"}>
//        <Heading textAlign={"center"}  fontWeight={"extrabold"} color={"whiteAlpha.800"} mb={5}> My Contact </Heading>
//       <SimpleGrid  columns={{base:1,md:2}} spacing={5}>
//         <Box border={"1px solid cyan"}  data-aos="fade-right">
       
//            <VStack>
//             <Box>
//               <HStack>
//                 <Box fontSize={"20px"} color={"cyan.100"}><MdOutlineShareLocation /></Box>
//                 <Box><Text textAlign={"center"} fontSize={"20px"} fontWeight={"bold"} color={"whiteAlpha.600"}>Gorakhpur - Uttar Pradesh</Text></Box>
//               </HStack>
//             </Box>
//             <Box >
//             <HStack>
//                 <Box fontSize={"20px"} color={"cyan.100"}> <SiGmail /></Box>
//                 <Box><Text textAlign={"center"} fontSize={"20px"} fontWeight={"bold"} color={"whiteAlpha.600"}>diwakarsharma2216@gmail.com</Text></Box>
//               </HStack>
//             </Box>
//             <Box>
//             <HStack>
//                 <Box fontSize={"20px"} color={"cyan.100"}><ImPhone /></Box>
//                 <Box><Text textAlign={"center"} fontSize={"20px"} fontWeight={"bold"} color={"whiteAlpha.600"}>+916394842216</Text></Box>
//               </HStack>
//             </Box>
//            </VStack>
//            <Box>
//             <HStack  mt={"2.5"} spacing={5}>
//               <Box fontSize={"60px"} color={"cyan.100"} ml={"39%"}><Link href=''><VscGithub /></Link></Box>
//               <Box fontSize={"60px"} color={"cyan.100"} > <FiLinkedin /></Box>
//             </HStack>
//            </Box>
//         </Box>
//         <Box border={"1px solid cyan"} data-aos="fade-left">
//     <form ref={form} onSubmit={sendEmail}>
//       <input type="text" name="user_name"  placeholder='Your Name' style={{backgroundColor:"##89898b",height:"6vh",width:"40vh",borderRadius:"10px",margin:"2vh"}}/>  <br />
//       <input type="email" name="user_email" placeholder='Email Address' style={{backgroundColor:"##89898b",height:"6vh",width:"40vh",borderRadius:"10px",margin:"2vh"}}/>  <br />
//       <textarea name="message"  placeholder='Message' style={{backgroundColor:"##89898b",height:"20vh",width:"40vh",borderRadius:"10px",margin:"2vh"}}/>   <br />
//       <input type="submit" value="Send" style={{height:"6vh",margin:"2vh",width:"15vh",borderRadius:"20px",backgroundColor:"#f2f1fe",border:"1px solid cyan",cursor:"pointer"}}/> 
//     </form>
//     </Box>
//     </SimpleGrid>
//     <Text mt={"4vh"} textAlign={"center"}  color={"whiteAlpha.800"} fontSize={"medium"} fontWeight={"black"}>Created by <span style={{color:"cyan"}}>Diwakar Sharma</span></Text>
//     </Container>
//   );
// };