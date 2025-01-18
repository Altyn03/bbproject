import { AppProps } from 'next/app';
import { Providers } from './Providers';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers messages={pageProps.messages}>
      <Component {...pageProps} />
    </Providers>
  );
}
