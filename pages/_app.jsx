import '@/styles/globals.css'
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <main className="scrollbar-thumb-gray-400 scrollbar-thin scrollbar-thumb-rounded scrollbar-track-transparent">
      <Script src="https://kit.fontawesome.com/f6f851698f.js" async></Script>
      <Component {...pageProps} /> 
    </main>
  );
}
