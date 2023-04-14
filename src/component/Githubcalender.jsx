import  GitHubCalendar  from 'react-github-calendar';
import { Box, SimpleGrid,Image } from '@chakra-ui/react';
import { DiAndroid } from "react-icons/di";
import GitHubUserStats from "react-github-user-stats";
function GithubCalendarComponent() {
  return (
    <Box w="100%" maxW="800px" mx="auto" className="react-activity-calendar">
     <GitHubCalendar  username="Diwakarsharma2216"     /> 
     <Box className="github-description">
      <SimpleGrid columns={{base:1,md:2}}>
        <Box>
        <Box> <span> <DiAndroid /></span> 1100+ Hours Practical Coding</Box>
        <Box> <span> <DiAndroid /></span>250+ Hours Data Structures & Algorithms</Box>
        <Box> <span> <DiAndroid /></span> 100+ Hours Soft Skill Development</Box>
        </Box>
        <Box>
        <Box> <span> <DiAndroid /></span> 4+ Projects</Box>
        <Box> <span> <DiAndroid /></span>10+ Mini Projects</Box>
        <Box> <span> <DiAndroid /></span> 300+ Git Commits</Box>
          </Box>
      </SimpleGrid>
     </Box>
     <box className="git-statistics">
       <SimpleGrid  columns={{base:1,md:3 }} gap={5}>
        <Box>
        <Image id="github-streak-stats" w="100%" h="100%" src="https://github-readme-streak-stats.herokuapp.com?user=Diwakarsharma2216&theme=merko&hide_border=true&type=png)](https://git.io/streak-stats"  />
        </Box>
        <Box>
        <Image id="github-top-langs" w="100%" h="100%" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Diwakarsharma2216&theme=merko&hide_border=true&hide_progress=true"  />
        </Box>
        <Box>
        <Image id="github-stats-card" w="100%" h="100%" src="https://github-readme-stats.vercel.app/api?username=Diwakarsharma2216&theme=merko&&hide_border=true&hide=contribs,prs"  />
        </Box>
       </SimpleGrid>
     </box>
    </Box>
  );
}

export default GithubCalendarComponent;