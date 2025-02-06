import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { IntlProvider } from './providers/NextIntlProvider';
import { store } from './providers/StoreProvider';
import { GlobalStyle } from './styles/global';

export const AppRout = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <IntlProvider messages={pageProps.messages}>
        <GlobalStyle />
        <Component {...pageProps} />
      </IntlProvider>
    </Provider>
  );
};
