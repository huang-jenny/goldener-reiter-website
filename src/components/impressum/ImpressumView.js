'use client';

import TextBlock from '@/components/reusable/TextBlock';
import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { formatRichText } from '@/lib/formatRichText';

const ImpressumView = ({ impressum }) => {
  return (
    <>
      <Box h="100vh" m={0} p={4} pb="32px" fontFamily="roboto">
        <TextBlock bgcolor="blue" color="blue" title="Impressum" className="scrollbar-pink">
          <Box color="pink">
            <Link href="/">← Home</Link>
          </Box>
          <Heading variant="title" color="yellow" mt={4}>
            Impressum
          </Heading>
          <Divider borderColor="yellow" />
          <Box color="yellow">{formatRichText(impressum?.impressum?.json)}</Box>
        </TextBlock>
      </Box>
    </>
  );
};

export default ImpressumView;
