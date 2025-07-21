'use client';

import { Box, Flex, Spacer, useBreakpointValue, VStack } from '@chakra-ui/react';
import Program from './program/Program';
import Door from './door/Door';
import About from './about/About';
import TextBlock from '../reusable/TextBlock';
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
          <TextBlock bgcolor="pink" color="blue" textAlign="left" width="100%">
            <Program events={events} />
          </TextBlock>

          <TextBlock bgcolor="blue" color="pink" textAlign="right" width="100%">
            <About goreiInfo={goreiInfo} />
          </TextBlock>
        </VStack>
      ) : (
        <Flex h="100vh" dir="row" gap={4} p={4} pb="32px">
          <TextBlock bgcolor="pink" color="blue" textAlign="left" flex="1">
            <Program events={events} />
          </TextBlock>
          <TextBlock bgcolor="yellow" flex="none" hasPadding={false}>
            <Door doorData={doorData} />
          </TextBlock>
          <TextBlock bgcolor="blue" color="pink" textAlign="right" flex="1">
            <About goreiInfo={goreiInfo} />
          </TextBlock>
        </Flex>
      )
    );
  }, [isMobile, events, goreiInfo, doorData]);

  return <>{pageContent}</>;
};

export default HomeView;
