'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { dbxlnightfever, karla, pressStart2P, roboto } from './fonts';

export const Providers = ({ children }) => {
  const theme = extendTheme({
    fonts: {
      roboto: roboto.style.fontFamily //for the footer
    },
    components: {
      Heading: {
        baseStyle: {
          fontFamily: karla.style.fontFamily,
          fontWeight: '600'
        },
        variants: {
          title: {
            fontFamily: dbxlnightfever.style.fontFamily,
            fontSize: ['1.9em', '2em', '2.1em', '2.2em'],
            fontWeight: 'normal'
          },
          subtitle: {
            fontSize: '1em',
            letterSpacing: '.04em',
            mt: '1em'
            // letterSpacing: '.1rem'
          },
          date: {
            fontSize: '0.85em',
            fontWeight: '700'
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
          my: ['4', '6', '8', '10'],
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
          bg: '#121117',

          color: 'white',
          fontFamily: pressStart2P.style.fontFamily, // Needed so it preloadds font before led animation
          fontSize: ['calc(13px + 1.2vmin)']
        },
        div: {
          fontFamily: karla.style.fontFamily,
          fontWeight: '600'
        },
        p: {
          fontFamily: karla.style.fontFamily,
          fontWeight: '600'
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
