import { loadLocaleMessages } from '@/utils/loadLocalization';
import { useTranslations } from 'next-intl';

export async function getStaticProps({ locale }: { locale: string }) {
  const messages = await loadLocaleMessages(locale);
  return {
    props: {
      messages,
    },
  };
}

export default function Home() {
  const t = useTranslations('home');

  return (
    <>
      <main>{t('hello')}</main>
    </>
  );
}
