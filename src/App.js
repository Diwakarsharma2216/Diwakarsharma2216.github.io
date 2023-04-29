
import { Heading,Text,Box } from '@chakra-ui/react';
import About from './component/About';
import  ContactUs  from './component/Contact';
import Github from './component/Github';
import Home from './component/Home';
import ColorModeToggle from './component/Navbar';
import { AiOutlineCaretUp } from "react-icons/ai";
import Navbar from './component/Navbar';
import Project from './component/Project';
import Skills from './component/Skills';

function App() {
  return (
    <div  >
     <ColorModeToggle />
     <Home />
     <About />
     <Skills />
     <Project />
     <Github />
     <ContactUs />
    <Box textAlign={"center"} m={{base:"1vh"}}>
      <Box><Text fontWeight="bold" color={"whiteAlpha.900"}>Developed by<AiOutlineCaretUp fontSize={"2xl"} m /></Text></Box>
      <Text color="red.500" fontSize="2xl" mt="2">
        Diwakar Sharma
      </Text>
      </Box>
    </div>
  );
}

export default App;
