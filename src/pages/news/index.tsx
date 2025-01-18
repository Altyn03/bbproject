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

const AboutPage = () => {
  const t = useTranslations('home');
  return <div>{t('welcome')}</div>;
};
export default AboutPage;
