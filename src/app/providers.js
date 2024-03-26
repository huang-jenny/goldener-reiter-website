'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import {
  chargen,
  dbxlnightfever,
  dynamicbrk,
  goldman,
  karla,
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
      // quantico: quantico.style.fontFamily,
      roboto: roboto.style.fontFamily,
      // matrix_complex: matrix_complex.style.fontFamily,
      dbxlnightfever: dbxlnightfever.style.fontFamily
      // dynamicbrk: dynamicbrk.style.fontFamily,
      // goldman: goldman.style.fontFamily
    },
    components: {
      Heading: {
        baseStyle: {
          fontFamily: karla.style.fontFamily,
          fontWeight: '700'
        },
        variants: {
          title: {
            // fontFamily: pressStart2P.style.fontFamily,
            // fontSize: ['1.3em', '1.4em', '1.5em', '1.6em', '1.7em'] //['30px', '34px', '38px', '42px']
            // fontFamily: dynamicbrk.style.fontFamily,
            fontFamily: dbxlnightfever.style.fontFamily,
            // fontFamily: goldman.style.fontFamily,
            fontSize: ['1.9em', '2em', '2.1em', '2.2em'],
            fontWeight: 'normal'
            // color: 'yellow'
          },
          subtitle: {
            // fontFamily: quantico.style.fontFamily,
            // fontFamily: karla.style.fontFamily,
            fontSize: '1em',
            letterSpacing: '.04em',
            mt: '1em'
            // letterSpacing: '.1rem'
          },
          date: {
            // fontFamily: pressStart2P.style.fontFamily,
            // fontFamily: matrix_complex.style.fontFamily,
            // fontFamily: quantico.style.fontFamily,
            // fontFamily: dbxlnightfever.style.fontFamily,

            fontSize: '0.85em',
            fontWeight: '700'
            // opacity: '0.7'
          },
          lineup: {
            fontSize: '1em',
            letterSpacing: '.04em',
            fontWeight: '800'
          },
          eventname: {
            fontSize: '1em',
            fontWeight: '800',
            letterSpacing: '.04em',
            opacity: '1',
            color: '#6c39db'
          }
        }
      },
      Divider: {
        baseStyle: {
          my: ['6', '8', '8', '10'],
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
        },
        variants: {
          footer: {
            textDecoration: 'underline',
            color: 'inherit',
            _hover: {
              textDecoration: 'underline',
              color: 'inherit'
            }
          }
        }
      }
    },
    colors: {
      red: '#E00404',
      blue: '#110F91',
      pink: '#F14DFF',
      black: '#121117',
      yellowTransparent: 'rgba(255,255,0,0.6)'
    },
    styles: {
      global: {
        body: {
          // bg: '#E00404',
          bg: '#121117',
          // bg: "black",

          color: 'white',
          fontFamily: pressStart2P.style.fontFamily, // Needed so it preloadds font before led animation
          fontSize: ['calc(13px + 1.2vmin)']
        },
        div: {
          // fontFamily: quantico.style.fontFamily
          fontFamily: karla.style.fontFamily,
          fontWeight: '700'
        },
        p: {
          // fontFamily: quantico.style.fontFamily
          fontFamily: karla.style.fontFamily,
          fontWeight: '700'
        },
        a: {
          color: 'inherit',
          fill: 'yellow',
          textDecoration: 'none'
        },
        'a:hover': {
          //doppelt zu oben "Link"
          color: 'yellow',
          textDecoration: 'none'
        }
      }
    }
  });
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
