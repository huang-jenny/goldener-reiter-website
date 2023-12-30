import { Press_Start_2P, Quantico } from 'next/font/google';
// import localFont from 'next/font/local';

export const pressStart2P = Press_Start_2P({
  preload: true,
  subsets: ['latin'],
  display: 'block',
  variable: '--font-press-start-2p',
  weight: '400'
});
export const quantico = Quantico({
  preload: true,
  subsets: ['latin'],
  display: 'block',
  variable: '--font-quantico',
  weight: '700'
});

// export const myFont = localFont({ src: '../../public/PressStart2P-Regular.ttf' });
