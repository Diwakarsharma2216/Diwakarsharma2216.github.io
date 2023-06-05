import React, { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';

const MyTypewriter = ({ text,delay=100 }) => {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setCurrentText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, delay); // Change the delay here to control the speed of typing
    return () => clearInterval(intervalId);
  }, [text]);

  return <Heading color={'whiteAlpha.700'} fontWeight={"semibold"} fontSize={{base:"1xl",md:"2xl"}}  >{currentText}</Heading>;
};

export default MyTypewriter;