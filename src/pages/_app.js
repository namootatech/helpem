import '@/styles/globals.css'
import NextNProgress from 'nextjs-progressbar';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#b91c1c" />
      <Component {...pageProps} />;
    </>
  );
}