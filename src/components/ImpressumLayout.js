'use client';

import TextBlock from '@/components/reusable/TextBlock';
import { Box, Heading } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { formatRichText } from '@/lib/formatRichText';
import { getImpressum } from '@/lib/contentful/impressum';
import { useEffect, useState } from 'react';

const ImpressumLayout = ({ impressum }) => {
  return (
    <Box p={4}>
      <Box my={2} color="yellow">
        <Link href="/">← Home</Link>
      </Box>
      <TextBlock bgcolor="yellow" color="blue" title="Impressum">
        {formatRichText(impressum?.impressum?.json)}
      </TextBlock>
    </Box>
  );
};

export default ImpressumLayout;
