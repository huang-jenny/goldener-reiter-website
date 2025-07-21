'use client';

import {
  Box,
  Flex,
  Spacer,
  useBreakpointValue,
  VStack
} from '@chakra-ui/react';
import Program from './program/Program';
import Door from './door/Door';
import About from './about/About';
import { Link } from '@chakra-ui/next-js';
import TextBlock from './reusable/TextBlock';
import { useEffect, useState } from 'react';

const HomeView = ({ events, goreiInfo, doorData, textShadow }) => {
  const [pageContent, setPageContent] = useState(null);
  const isMobile = useBreakpointValue({ base: true, lg: false }); //todo: testen auf versch geräten

  useEffect(() => {
    setPageContent(
      isMobile ? (
        <VStack pb="50px" gap="0">
          <TextBlock bgcolor="yellow" width="100%" hasPadding={false}>
            <Door doorData={doorData} />
          </TextBlock>
          <TextBlock bgcolor="pink" color="blue" title="Coming Up" textAlign="left" width="100%">
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
        <Flex h="100vh" dir="row" gap={4} p={4} pb="32px">
          <TextBlock
            bgcolor="pink"
            color="blue"
            title="Coming Up"
            textAlign="left"
            flex="1">
            <Program events={events} />
          </TextBlock>
          <TextBlock bgcolor="yellow" flex="none" hasPadding={false}>
            <Door doorData={doorData} />
          </TextBlock>
          <TextBlock
            bgcolor="blue"
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

    );
  }, [isMobile, events, goreiInfo, doorData]);

  return (
    <>
      {/* HEADER */}
      {pageContent}
      {/* FOOTER */}
      <Flex
        px={4}
        h={['50px', '50px', '50px', '32px']}
        position="absolute"
        bottom={0}
        color="yellowTransparent"
        w="100%"
        alignItems="center">

        <Spacer />
        <Box fontSize="10px" fontFamily="roboto" fontWeight="300" letterSpacing=".03rem">
          website designed & built by{' '}
          <Link href="https://www.jennyhuang.de/" variant="footer" isExternal>
            Jenny Huang
          </Link>
        </Box>

        <Box
          fontSize="10px"
          pl={6}
          fontFamily="roboto"
          fontWeight="300"
          letterSpacing=".03rem"
        >
          <Link href="/impressum" variant="footer">
            Impressum
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default HomeView;
