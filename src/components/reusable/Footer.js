import React from 'react';
import { Flex, Box, Spacer } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

const Footer = () => {
  return (
    <Flex
      px={4}
      h={['50px', '50px', '50px', '32px']}
      position="absolute"
      bottom={0}
      color="yellowTransparent"
      w="100%"
      alignItems="center"
    >
      <Spacer />
      <Box fontSize="10px" fontFamily="roboto" fontWeight="300" letterSpacing=".03rem">
        website designed & built by{' '}
        <Link href="https://www.jennyhuang.de/" variant="footer" isExternal>
          Jenny Huang
        </Link>
      </Box>

      <Box fontSize="10px" pl={6} fontFamily="roboto" fontWeight="300" letterSpacing=".03rem">
        <Link href="/impressum" variant="footer">
          Impressum
        </Link>
      </Box>
    </Flex>
  );
};

export default Footer;
