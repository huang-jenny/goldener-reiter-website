'use client';

import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import Program from './program/Program';
import Door from './door/Door';
import About from './about/About';

const PageTemplate = ({ events }) => {
  return (
    <div>
      <Flex h="100vh" dir="row" gap={4} p={4} pb={8}>
        <Block color="pink">
          <Program events={events} />
        </Block>
        <Block color="green" width="400px">
          <Door />
        </Block>
        <Block color="red">
          <About />
        </Block>
      </Flex>
    </div>
  );
};

const Block = ({ children, color, title, width }) => {
  return (
    <Box flex={width ? '' : 1} width={width}>
      <Box bgColor={color} h="100%" overflowY="auto">
        {children}
      </Box>
    </Box>
  );
};

export default PageTemplate;
