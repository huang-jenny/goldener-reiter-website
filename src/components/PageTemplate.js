'use client';

import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import Program from './program/Program';
import Door from './door/Door';
import About from './about/About';

const PageTemplate = ({ events, goreiInfo }) => {
  return (
    <div>
      <Flex h="100vh" dir="row" gap={4} p={4} pb={8}>
        <Block bgcolor="pink" color="blue" title="Program" textAlign="left">
          <Program events={events} />
        </Block>
        <Block bgcolor="green" width="450px">
          <Door />
        </Block>
        <Block bgcolor="blue" color="pink" title="Goldener Reiter" textAlign="right">
          <About goreiInfo={goreiInfo} />
        </Block>
      </Flex>
    </div>
  );
};

const Block = ({ children, bgcolor, color, title, width, textAlign }) => {
  return (
    <Box flex={width ? '' : 1} width={width}>
      <Box
        bgColor={bgcolor}
        h="100%"
        overflowY="auto"
        textAlign={textAlign}
        py={6}
        px={10}
        color={color}>
        <Heading variant="title" mb={8}>
          {title}
        </Heading>
        {children}
      </Box>
    </Box>
  );
};

export default PageTemplate;
