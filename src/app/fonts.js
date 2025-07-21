import {
  Press_Start_2P,
  Roboto,
  Karla
} from 'next/font/google';
import localFont from 'next/font/local';

export const karla = Karla({
  preload: true,
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'block',
  variable: '--font-karla',
  weight: ['200', '300', '400', '500', '600', '700', '800']
});


export const pressStart2P = Press_Start_2P({
  preload: true,
  subsets: ['latin'],
  display: 'block',
  variable: '--font-press-start-2p',
  weight: '400'
});

export const roboto = Roboto({
  preload: true,
  subsets: ['latin'],
  display: 'block',
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700']
});

export const dbxlnightfever = localFont({
  src: '../../public/dbxlnightfever.wide.ttf',
  display: 'block',
  style: 'wide'
});