'use client';

import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Link, 
  useBreakpointValue,
  VStack
} from '@chakra-ui/react';
import Program from './program/Program';
import Door from './door/Door';
import About from './about/About';
import { Link } from '@chakra-ui/next-js'
// import Link from 'next/link';

const PageTemplate = ({ events, goreiInfo }) => {
  return (
    <>
      {useBreakpointValue(
        {
          base: (
            <VStack pb="38px">
              <Block bgcolor="yellow" width="100%" hasPadding={false}>
                <Door />
              </Block>
              <Block bgcolor="pink" color="blue" title="Program" textAlign="left" width="100%">
                <Program events={events} />
              </Block>

              <Block
                bgcolor="blue"
                color="pink"
                title="Goldener Reiter"
                textAlign="right"
                width="100%">
                <About goreiInfo={goreiInfo} />
              </Block>
            </VStack>
          ),

          md: (
            <Flex h="100vh" dir="row" gap={4} p={4} pb="38px">
              <Block bgcolor="pink" color="blue" title="Program" textAlign="left" flex="1">
                <Program events={events} />
              </Block>
              <Block bgcolor="yellow" flex="none" hasPadding={false} width="500px">
                <Door />
              </Block>
              <Block bgcolor="blue" color="pink" title="Goldener Reiter" textAlign="right" flex="1">
                <About goreiInfo={goreiInfo} />
              </Block>
            </Flex>
          )
        }
        // { ssr: false }
      )}

      {/* FOOTER */}
      <Flex
        px={4}
        h="38px"
        position="absolute"
        bottom={0}
        w="100%"
        alignItems="center"
        color="blue">
        {/* <Spacer /> */}
        {/*  */}
        {/* <Link>
          <Box fontSize="16px">Impressum</Box>
        </Link> */}

        <Spacer />
        <Box opacity="0.7" fontSize="11px" fontFamily="Arial">
          Website designed & built by{' '}
          <Link href="https://www.jennyhuang.de/" textDecoration="underline" isExternal>
            Jenny Huang
          </Link>
        </Box>

        <Box fontSize="13px" pl={12}>
          <Link href="/impressum">IMPRESSUM</Link>
        </Box>
      </Flex>
      {/* <Flex
        px={4}
        h="28px"
        position="absolute"
        bottom={0}
        w="100%"
        alignItems="center"
        color="blue">
        <Spacer />
  
        <Link>
          <Box fontSize="12px">Impressum</Box>
        </Link>

        <Spacer />

      </Flex> */}
    </>
  );
};

const Block = ({ children, bgcolor, color, title, width, textAlign, flex, hasPadding = true }) => {
  return (
    // <Box flex={width ? 'none' : 'auto'} width={width}>
    <Box flex={flex} width={width}>
      <Box
        bgColor={bgcolor}
        id="test"
        h="100%"
        overflowY="auto"
        textAlign={textAlign}
        wordBreak="break-word"
        py={hasPadding ? '4%' : 0}
        px={hasPadding ? ['4%', '5%', '6%', '7%', '8%'] : 0} //{[2, 3, 5, 7, 10]}
        color={color}>
        {title && (
          <Heading variant="title" mb={8}>
            {title}
          </Heading>
        )}
        {children}
      </Box>
    </Box>
  );
};

export default PageTemplate;
