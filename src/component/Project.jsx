import { Heading, SimpleGrid,Image,Box,Text, Container, VStack, HStack, Button } from '@chakra-ui/react'
import React from 'react'
import { DiReact } from 'react-icons/di'

const Project = () => {
  const projectdata=[
    {image:"https://i.ibb.co/6vdbyj2/Screenshot-405.png",heading:"Myntra Clone",desc:"First Backend Project with NodeJS, ExpressJS and MongoDB. Used EJS to render views. Main functionalities were : Register/Login using JWT, Sorting and Filtering in the backend, Cart and Wish List and many more.",reactlogo:<DiReact />,htmlogo:<DiReact />,jslogo:<DiReact />,chakrlogo:<DiReact />},
    {image:"https://news-cdn.softpedia.com/images/news2/Dropbox-2-9-Enters-Development-with-Streaming-Sync-Feature-442773-2.jpg",heading:"Backend API for Drive / DropBox Clone",desc:"Backend API for a google drive like app built using NodeJS, Express, Mongoose, MongoDB Atlas and AWS S3 for storage. A solo project. CRUD operations for users ",reactlogo:<DiReact />,htmlogo:<DiReact />,jslogo:<DiReact />,chakrlogo:<DiReact />}
  ]
  return (
    <div  id="projects">
      <Heading mt={"10px"} textAlign={"center"}>PROJECTS</Heading>
      <Container  maxW={"container.xl"} textAlign={"center"}>
      {projectdata.map((el)=><Box m={4} border={"2px solid cyan"} h={{md:"400px"}}> 
        <SimpleGrid columns={{base:1,md:2}} spacing={5}>
          <Box>
            <Image src={el.image} h={{base:"200px",md:"200px"}} w={{base:400,md:600}} m="auto" />
          </Box>
          <Box>
            <VStack>
           <Box>
            <Heading mt={9}>{el.heading}</Heading>
            </Box> 
            <Box>
            <Text textAlign={"center"} >{el.desc}</Text>
            </Box>
            <Box>
              <HStack fontSize={"36px"}>
                <Box>{el.reactlogo}</Box>
                <Box>{el.reactlogo}</Box>
                <Box>{el.reactlogo}</Box>
                <Box>{el.reactlogo}</Box>
                <Box>{el.reactlogo}</Box>
              </HStack>
            </Box>
            <Box>
              <HStack mb={3}>
                <Box>
              <Button colorScheme='teal' variant='outline'>See this Live</Button>
            
                </Box>
                <Box>
                <Button colorScheme='teal' variant='outline'>View Code</Button>
                </Box>
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
