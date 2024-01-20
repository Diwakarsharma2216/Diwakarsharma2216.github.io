import logo from "../asset/logo.png"
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  VStack
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaUserAstronaut } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { RiProjectorFill } from "react-icons/ri";
import { RiContactsBook2Fill } from "react-icons/ri";
import { chakra } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
const Links = [['Home',"home",<IoIosHome />],['About',"about",<FaUserAstronaut />], ['Skills',"skills",<GiSkills />],['Project',"projects",<RiProjectorFill />],['Contact',"contact",<RiContactsBook2Fill />]];


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hoverAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-3px);
  }
`;

const HoverButton = chakra(Button, {
  baseStyle: {
    fontWeight: 'bold',
    textShadow: '0 0 10px rgba(0, 0, 0, 0.3)', 
    color: 'yellow.100',
  },
  _hover: {
    fontWeight: 'bold',
    textShadow: '0 0 20px rgba(0, 0, 0, 0.5)', 
    color: 'teal.500',
    animation: `${hoverAnimation} 0.3s ease-in-out forwards`,
  },
});

const HoverLink = chakra('a', {
  baseStyle: {
    textDecoration: 'none',
    color: 'yellow.100',
    fontWeight: 'bold',
    textShadow: '0 0 10px rgba(0,0,0,0.3)',
    _hover: {
      textDecoration: 'none',
      textShadow: '0 0 20px rgba(0,0,0,0.5)',
      color: 'teal.500',
      fontWeight: 'bold',
      animation: `${hoverAnimation} 0.3s ease-in-out forwards`,
    },
  },
});

  return (
    <div id="nav-menu">
      <Box bg={useColorModeValue('gray.800', 'gray.900')} px={4}  width="100%" left={"0"} right="0"  position="sticky" top="0"   z-index="1000" >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><Image src={logo}  height="60px"  width={"100%"} /></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
              <HoverLink   className={`nav-link ${link[1]}`} href={`/#${link[1]}`}>
                 <HStack spacing='2px'>
                  <Box>
              {link[0]}
              </Box>
              <Box>
                {link[2]}
              </Box>
              </HStack>
            </HoverLink>
               
              ))
              }
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
         
          <HoverButton  colorScheme="cyan" >
          <a class="nav-link resume" id="resume-button-1" href="https://drive.google.com/u/0/uc?id=1x8r1PQ6W3QCZEYkPpyR4QQZ8MnzDNowh&amp;export=download" target="_blank" rel="noreferrer" download="Diwakar-Sharma-Resume.pdf">Resume</a>
    </HoverButton >
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              
            {Links.map((link) => (
              
              <HoverLink  className={`nav-link ${link[1]}`} href={`/#${link[1]}`} >
               <HStack spacing='2px'>
                <Box>
              {link[0]}
              </Box>
              <Box>
            {link[2]}
              </Box>
              </HStack>
            </HoverLink>
              ))
              }
              
            </Stack>
          </Box>
        ) : null}
      </Box>

     
    </div>
  );
}