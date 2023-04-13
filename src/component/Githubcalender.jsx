import  GitHubCalendar  from 'react-github-calendar';
import { Box } from '@chakra-ui/react';

function GithubCalendarComponent() {
  return (
    <Box w="100%" maxW="800px" mx="auto" className="react-activity-calendar">
     <GitHubCalendar  username="Diwakarsharma2216"     /> 
     
    </Box>
  );
}

export default GithubCalendarComponent;