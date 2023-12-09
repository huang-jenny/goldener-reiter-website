'use client';
import { Box, Heading, Link, Wrap, Divider } from '@chakra-ui/react';
import { formatRichText } from '@/lib/formatRichText';
import Image from 'next/image';
const About = ({ goreiInfo }) => {
  return (
    <>
      <Heading variant="subtitle">YOU&apos;LL NEVER RIDE ALONE</Heading>
      <Divider borderColor="pink" my={4} />
      <Link isExternal href={goreiInfo.googleMapsLink}>
        <Box>{formatRichText(goreiInfo.address.json)}</Box>
      </Link>
      <Box>Opening Hours:</Box>
      <Box>{formatRichText(goreiInfo.openingHours.json)}</Box>
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
