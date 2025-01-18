import { store } from '@/store';
import GlobalStyle from '@/styles/GlobalStyles';
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

type ProvidersProps = {
  children: ReactNode;
  messages: Record<string, string>;
};

export const Providers = ({ children, messages }: ProvidersProps) => {
  const { locale } = useRouter();
  return (
    <Provider store={store}>
      <NextIntlClientProvider messages={messages} locale={locale} timeZone='Europe/Moscow'>
        <GlobalStyle />
        {children}
      </NextIntlClientProvider>
    </Provider>
  );
};
