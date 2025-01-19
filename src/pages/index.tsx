import { Home } from '@/screens/Home';
import { loadLocaleMessages } from '@/utils/loadLocalization';
import { Meta } from '@/utils/seo/Meta';
import { useTranslations } from 'next-intl';

export async function getStaticProps({ locale }: { locale: string }) {
  const messages = await loadLocaleMessages(locale);
  return {
    props: {
      messages,
    },
  };
}

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <Meta title={t('title')} description={t('description')}>
      <Home />
    </Meta>
  );
}
