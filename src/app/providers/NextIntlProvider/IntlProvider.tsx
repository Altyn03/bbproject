import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

interface IIntlProviderProps {
  children: ReactNode;
  messages: Record<string, string>;
}

export const IntlProvider = ({ children, messages }: IIntlProviderProps) => {
  const { locale } = useRouter();
  return (
    <NextIntlClientProvider messages={messages} locale={locale} timeZone='Europe/Moscow'>
      {children}
    </NextIntlClientProvider>
  );
};
