'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

export function Providers({ children }) {
  const theme = extendTheme({
    colors: {
      red: '#FB4034',
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
