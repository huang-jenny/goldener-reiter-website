'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { Press_Start_2P } from 'next/font/google';

const pressStart2P = Press_Start_2P({ subsets: ['latin'], display: 'swap', weight: '400' });

export function Providers({ children }) {
  const theme = extendTheme({
    components: {
      Heading: {
        baseStyle: {
          fontFamily: pressStart2P.style.fontFamily
        }
      }
    },
    colors: {
      red: '#FF2F2F',
      blue: '#144CDB',
      pink: '#D83CFF'
    },
    styles: {
      global: {
        body: {
          bg: '#144CDB',
          color: 'black'
        },
        a: {
          //   color: 'teal.500',
          _hover: {
            textDecoration: 'underline'
          }
        }
      }
    }
  });
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
