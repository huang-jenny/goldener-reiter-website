import {
  Hammersmith_One,
  Press_Start_2P,
  Quantico,
  Roboto,
  Ubuntu,
  Goldman,
  Karla,
  Work_Sans,
  Stoke,
  Kanit
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

export const ubuntu = Ubuntu({
  preload: true,
  subsets: ['latin'],
  display: 'block',
  variable: '--font-ubuntu',
  weight: ['300', '400', '500', '700']
});

export const kanit = Kanit({
  preload: true,
  subsets: ['latin'],
  display: 'block',
  variable: '--font-kanit',
  weight: ['200', '300', '400', '500', '700']
});

export const pressStart2P = Press_Start_2P({
  preload: true,
  subsets: ['latin'],
  display: 'block',
  variable: '--font-press-start-2p',
  weight: '400'
});

export const workSans = Work_Sans({
  preload: true,
  subsets: ['latin'],
  display: 'block',
  variable: '--font-work-sans',
  weight: ['300', '400', '500', '600', '700']
});

export const quantico = Quantico({
  preload: true,
  subsets: ['latin'],
  display: 'block',
  variable: '--font-quantico',
  weight: '700'
});

export const hammersmithOne = Hammersmith_One({
  preload: true,
  subsets: ['latin'],
  display: 'block',
  variable: '--font-hammersmith-one',
  weight: '400'
});

export const stoke = Stoke({
  preload: true,
  subsets: ['latin'],
  display: 'block',
  variable: '--font-stoke',
  weight: ['300', '400']
});

export const roboto = Roboto({
  preload: true,
  subsets: ['latin'],
  display: 'block',
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700']
});

export const goldman = Goldman({
  preload: true,
  subsets: ['latin'],
  display: 'block',
  variable: '--font-goldman',
  weight: '400'
});
// export const myFont = localFont({ src: '../../public/PressStart2P-Regular.ttf' });

export const matrix_complex = localFont({
  src: '../../public/Matrix_Complex_NC.ttf',
  display: 'block'
});

export const chargen = localFont({
  src: '../../public/6809chargen.otf',
  display: 'block'
});

export const dbxlnightfever = localFont({
  src: '../../public/dbxlnightfever.wide.ttf',
  display: 'block',
  style: 'wide'
});

export const hemihead426 = localFont({
  src: '../../public/hemi-head-426.otf',
  display: 'block'
});

export const dynamicbrk = localFont({
  src: '../../public/dynamic-brk.ttf',
  display: 'block'
});
