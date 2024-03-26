'use client';

import TextBlock from '@/components/reusable/TextBlock';
import { Box, Heading } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { formatRichText } from '@/lib/formatRichText';
import { getImpressum } from '@/lib/contentful/impressum';
import { useEffect, useState } from 'react';

const ImpressumLayout = ({ impressum }) => {
  return (
    <Box p={4} fontFamily="roboto">
      <Box my={2} color="yellow">
        <Link href="/">← Home</Link>
      </Box>
      <TextBlock bgcolor="yellow" color="blue" title="Impressum">
        <Box fontFamily="Times New Roman">{formatRichText(impressum?.impressum?.json)}</Box>
      </TextBlock>
    </Box>
  );
};

export default ImpressumLayout;
