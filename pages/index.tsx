import { HomePage } from '@/pages/HomePage';
import { loadLocaleMessages } from '@/shared/lib/loadLocalization';
import type { ReactElement } from 'react';

const Home = (): ReactElement => <HomePage />;

export async function getStaticProps({ locale }: { locale: string }) {
  const messages = await loadLocaleMessages(locale);
  return {
    props: {
      messages,
    },
  };
}

export default Home;
