'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { Press_Start_2P, Quantico } from 'next/font/google';

const pressStart2P = Press_Start_2P({ subsets: ['latin'], display: 'swap', weight: '400' });
const quantico = Quantico({ subsets: ['latin'], display: 'swap', weight: '700' });

export function Providers({ children }) {
  const theme = extendTheme({
    fonts: {
      pressStart2P: pressStart2P.style.fontFamily,
      quantico: quantico.style.fontFamily
    },
    components: {
      Heading: {
        baseStyle: {
          fontFamily: pressStart2P.style.fontFamily
        },
        variants: {
          title: {
            fontFamily: pressStart2P.style.fontFamily,
            fontSize: ['1.3em', '1.4em', '1.5em', '1.6em', '1.7em'] //['30px', '34px', '38px', '42px']
          },
          subtitle: {
            fontFamily: quantico.style.fontFamily,
            fontSize: '1.15em'
          },
          date: {
            fontFamily: pressStart2P.style.fontFamily,
            fontSize: '0.85em'
          }
        }
      },
      Divider: {
        baseStyle: {
          borderWidth: '4px',
          opacity: '1'
        }
      },
      Link: {
        baseStyle: {
          _hover: {
            textDecoration: 'none',
            color: 'yellow',
            fill: 'yellow'
          }
        }
      }
    },
    colors: {
      red: '#E00404',
      blue: '#110F91',
      pink: '#F14DFF'
    },
    styles: {
      global: {
        body: {
          bg: '#E00404',
          //   color: 'black',
          fontFamily: quantico.style.fontFamily,
          fontSize: ['18px', '20px', '22px', '24px']
        }
      }
    }
  });
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
