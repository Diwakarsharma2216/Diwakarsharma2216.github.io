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



const Links = [['Home',"home"],['About',"about"], ['Skills',"skills"],['Project',"projects"],['Contact',"contact"]];


const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div id="nav-menu">
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}  width="100%" left={"0"} right="0"  position="sticky" top="0"   z-index="1000" >
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
              <a  className={`nav-link ${link[1]}`} href={`/#${link[1]}`}>
              {link[0]}
            
            </a>
               
              ))
              }
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
         
          <Button >
          <a class="nav-link resume" id="resume-button-1" href="https://drive.google.com/u/0/uc?id=1BxmB_O79aTDdO-Q3T_ciRKa63BmCqFXj&amp;export=download" target="_blank" rel="noreferrer" download="Diwakar-Sharma-Resume.pdf">Resume</a>
    </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              
              {Links.map((link) => (
              <a  className={`nav-link ${link[1]}`} href="/#home">
              {link[0]}
            
            </a>
               
              ))
              }
              
            </Stack>
          </Box>
        ) : null}
      </Box>

     
    </div>
  );
}