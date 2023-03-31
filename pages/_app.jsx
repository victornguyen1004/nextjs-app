import '@/styles/globals.css'
import Script from 'next/script';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({subsets: ['latin']});

export default function App({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <Script src="https://kit.fontawesome.com/f6f851698f.js" async></Script>
      <Component {...pageProps} />
    </main>
  );
}
