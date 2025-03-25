import { 
    Poppins,
    Merriweather,
    Quicksand,
    Plus_Jakarta_Sans,
    Rethink_Sans,
  } from 'next/font/google';
  
  // Configure each font family
  export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins'
  });
  
  export const merriweather = Merriweather({
    subsets: ['latin'],
    weight: ['300', '400', '700', '900'],
    style: ['italic', 'normal'],
    variable: '--font-merriweather'
  });
  
  export const quicksand = Quicksand({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-quicksand'
  });
  
  export const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    variable: '--font-jakarta'
  });
  
  export const rethink = Rethink_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-rethink'
  });
  

  // Export a main font to use as default
  export const mainFont = poppins;