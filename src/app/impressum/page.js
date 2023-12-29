'use client';

import TextBlock from '@/components/reusable/TextBlock';
import { Box, Heading } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

const Impressum = () => {
  return (
    <Box p={4}>
      <Box my={2}>
        <Link href="/">← Home</Link>
      </Box>
      <TextBlock bgcolor="yellow" color="blue" title="Impressum">
        tbd
      </TextBlock>
    </Box>
  );
};

export default Impressum;
