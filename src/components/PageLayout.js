'use client';

import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  useTheme,
  // Link,
  useBreakpointValue,
  VStack
} from '@chakra-ui/react';
import Program from './program/Program';
import Door from './door/Door';
import About from './about/About';
import { Link } from '@chakra-ui/next-js';
import TextBlock from './reusable/TextBlock';
import { useEffect, useState } from 'react';
// import Link from 'next/link';

const PageTemplate = ({ events, goreiInfo, doorData, textShadow }) => {
  const [pageContent, setPageContent] = useState(null);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const theme = useTheme();
  useEffect(() => {
    setPageContent(
      isMobile ? (
        <VStack pb="50px" gap={0}>
          <TextBlock bgcolor="yellow" width="100%" hasPadding={false}>
            <Door doorData={doorData} />
          </TextBlock>
          <TextBlock bgcolor="pink" color="blue" title="Program" textAlign="left" width="100%">
            <Program events={events} />
          </TextBlock>

          <TextBlock
            bgcolor="blue"
            color="pink"
            title="Goldener Reiter"
            textAlign="right"
            width="100%">
            <About goreiInfo={goreiInfo} />
          </TextBlock>
        </VStack>
      ) : (
        <Flex h="100vh" dir="row" gap={4} p={4} pb="34px">
          <TextBlock
            bgcolor="pink"
            // textShadow={`-2px 4px 0px ${theme.colors.blue}`}
            color="blue"
            title="Program"
            textAlign="left"
            flex="1">
            <Program events={events} />
          </TextBlock>
          <TextBlock bgcolor="yellow" flex="none" hasPadding={false}>
            <Door doorData={doorData} />
            {/* todo: MaxWidth setzen damit auch bei quadratischeren bildschirmen gut aussieht*/}
          </TextBlock>
          <TextBlock
            bgcolor="blue"
            // textShadow={`-2px 4px 0px ${theme.colors.pink}`}
            color="pink"
            title={
              <>
                Goldener <br /> Reiter
              </>
            }
            textAlign="right"
            flex="1">
            <About goreiInfo={goreiInfo} />
          </TextBlock>
        </Flex>
      )

      // { ssr: false }
    );
  }, [isMobile]);

  return (
    <>
      {/* HEADER */}
      {pageContent}
      {/* FOOTER */}
      <Flex
        px={4}
        h={['50px', '50px', '34px']}
        position="absolute"
        bottom={0}
        w="100%"
        alignItems="center"
        color="yellowTransparent">
        {/* <Spacer /> */}
        {/*  */}
        {/* <Link>
          <Box fontSize="16px">Impressum</Box>
        </Link> */}

        <Spacer />
        <Box fontSize="10px" fontFamily="roboto" fontWeight="300" letterSpacing=".03rem">
          website designed & built by{' '}
          <Link href="https://www.jennyhuang.de/" textDecoration="underline" isExternal>
            Jenny Huang
          </Link>
        </Box>

        <Box
          fontSize="10px"
          pl={6}
          fontFamily="roboto"
          fontWeight="300"
          letterSpacing=".03rem"
          textDecoration="underline"
          // color="yellow"
        >
          <Link href="/impressum">Impressum</Link>
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

export default PageTemplate;
