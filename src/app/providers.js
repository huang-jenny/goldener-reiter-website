'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { pressStart2P, quantico, roboto } from './fonts';

export const Providers = ({ children }) => {
  const theme = extendTheme({
    fonts: {
      pressStart2P: pressStart2P.style.fontFamily,
      quantico: quantico.style.fontFamily,
      roboto: roboto.style.fontFamily
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
          bg: '#121117',

          // color: 'white',
          fontFamily: pressStart2P.style.fontFamily, // Needed so it preloadds font before led animation
          fontSize: ['18px', '20px', '22px', '24px']
        },
        div: {
          fontFamily: quantico.style.fontFamily
        },
        p: {
          fontFamily: quantico.style.fontFamily
        }
      }
    }
  });
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
