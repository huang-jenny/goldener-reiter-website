'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import {
  chargen,
  dbxlnightfever,
  dynamicbrk,
  goldman,
  hammersmithOne,
  hemihead426,
  matrix_complex,
  pressStart2P,
  quantico,
  roboto
} from './fonts';

export const Providers = ({ children }) => {
  const theme = extendTheme({
    fonts: {
      pressStart2P: pressStart2P.style.fontFamily,
      quantico: quantico.style.fontFamily,
      roboto: roboto.style.fontFamily,
      matrix_complex: matrix_complex.style.fontFamily
    },
    components: {
      Heading: {
        baseStyle: {
          fontFamily: hammersmithOne.style.fontFamily
          // fontWeight: 'bold'
        },
        variants: {
          title: {
            // fontFamily: pressStart2P.style.fontFamily,
            // fontSize: ['1.3em', '1.4em', '1.5em', '1.6em', '1.7em'] //['30px', '34px', '38px', '42px']
            fontFamily: dynamicbrk.style.fontFamily,
            fontFamily: dbxlnightfever.style.fontFamily,
            // fontFamily: goldman.style.fontFamily,
            fontSize: ['1.9em', '2em', '2.1em', '2.2em', '2.1em'],
            fontWeight: 'normal'
            // color: 'yellow'
          },
          subtitle: {
            // fontFamily: quantico.style.fontFamily,
            // fontFamily: hammersmithOne.style.fontFamily,
            fontSize: '1em',
            fontWeight: 'normal'
            // letterSpacing: '.1rem'
          },
          date: {
            // fontFamily: pressStart2P.style.fontFamily,
            // fontSize: '0.85em'
            // fontFamily: matrix_complex.style.fontFamily,
            // fontSize: '1em'
            // fontFamily: quantico.style.fontFamily,
            // fontFamily: dbxlnightfever.style.fontFamily,

            fontSize: '0.85em',
            fontWeight: 'normal'
          },
          lineup: {
            fontSize: '1em',
            letterSpacing: '.1rem'
            // fontWeight: 'normal'
          },
          eventname: {
            fontSize: '1em',
            fontWeight: 'normal'
          }
        }
      },
      Divider: {
        baseStyle: {
          borderWidth: ['2px', '2px', '2px', '4px'],
          borderRadius: ['1px', '1px', '1px', '2px'],
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
      pink: '#F14DFF',
      yellowTransparent: 'rgba(255,255,0,0.6)'
    },
    styles: {
      global: {
        body: {
          bg: '#E00404',
          bg: '#121117',

          // color: 'white',
          fontFamily: pressStart2P.style.fontFamily, // Needed so it preloadds font before led animation
          fontSize: ['18px', '20px', '22px', '24px', '26px']
        },
        div: {
          // fontFamily: quantico.style.fontFamily
          fontFamily: hammersmithOne.style.fontFamily
        },
        p: {
          // fontFamily: quantico.style.fontFamily
          fontFamily: hammersmithOne.style.fontFamily
        }
      }
    }
  });
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
