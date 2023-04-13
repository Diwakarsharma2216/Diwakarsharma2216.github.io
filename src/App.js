
import { Box } from '@chakra-ui/react';
import './App.css';

import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills';
import Project from './component/Project';
import Contact from './component/Contact';


function App() {
  return (
    <div  >
      <Box  bg='gray.800' color="whiteAlpha.900">
       
     {/* <AllRoutes /> */}
       <Navbar />
       <Home />
       <About />
       <Skills />
       <Project />
       <Contact />
     </Box>
    </div>
  );
}

export default App;
