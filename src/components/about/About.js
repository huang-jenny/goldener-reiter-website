'use client';
import { Box, Divider, HStack, Heading, Link, Wrap } from '@chakra-ui/react';
import { formatRichText } from '@/lib/formatRichText';
import Image from 'next/image';
const About = ({ goreiInfo }) => {
  return (
    <>
      <Heading variant="subtitle">YOU&apos;LL NEVER RIDE ALONE</Heading>
      <Divider my={4} />
      <Box variant="secondfont">{formatRichText(goreiInfo.informationen.json)}</Box>
      <Wrap justify="right">
        <Link href={goreiInfo.instagramLink} rel="noreferrer" target="_blank">
          <Image
            src="/Instagram_Glyph_Black.svg"
            alt="Instagram Icon"
            width={0}
            height={0}
            style={{ width: 'auto', height: '1em' }}
            loading="eager"
          />
        </Link>
      </Wrap>
    </>
  );
};

export default About;
