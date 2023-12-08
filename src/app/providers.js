'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { Press_Start_2P, Quantico } from 'next/font/google';

const pressStart2P = Press_Start_2P({ subsets: ['latin'], display: 'swap', weight: '400' });
const quantico = Quantico({ subsets: ['latin'], display: 'swap', weight: '700' });

export function Providers({ children }) {
  const theme = extendTheme({
    components: {
      Heading: {
        baseStyle: {
          fontFamily: pressStart2P.style.fontFamily
        },
        variants: {
          title: {
            fontFamily: pressStart2P.style.fontFamily,
            fontSize: '42px'
          },
          subtitle: {
            fontFamily: quantico.style.fontFamily,
            fontSize: '28px'
          }
        }
      },
      Box: {
        baseStyle: {
          fontFamily: quantico.style.fontFamily
        }
      },
      Divider: {
        baseStyle: {
          borderColor: 'black',
          borderWidth: '4px',
          opacity: '1'
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
          color: 'black',
          fontFamily: quantico.style.fontFamily,
          fontSize: '16pt'
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
