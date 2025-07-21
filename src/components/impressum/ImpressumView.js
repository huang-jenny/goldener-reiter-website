'use client';

import TextBlock from '@/components/reusable/TextBlock';
import { Box, Divider } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { formatRichText } from '@/lib/formatRichText';

const ImpressumView = ({ impressum }) => {
  return (
    <Box p={4} fontFamily="roboto">
      <Box my={2} color="yellow">
        <Link href="/">← Home</Link>
      </Box>

      <TextBlock bgcolor="yellow" color="blue" title="Impressum">
        <Divider borderColor="blue" />
        <Box>{formatRichText(impressum?.impressum?.json)}</Box>
      </TextBlock>
    </Box>
  );
};

export default ImpressumView;
