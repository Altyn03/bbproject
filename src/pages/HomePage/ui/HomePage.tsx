import { Meta } from '@/shared/lib/seo';
import { ParallaxBackground } from '@/shared/ui/ParallaxBackground';
import { BannerHomePageWidget } from '@/widgets/BannerHomePageWidget';
import { PositionTeamModalWidget } from '@/widgets/PositionTeamModalWidget';
import { PrizeFundWidget } from '@/widgets/PrizeFundWidget';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';

export const HomePage = () => {
  const t = useTranslations('home');

  return (
    <Meta title={t('title')} description={t('description')}>
      <main>
        <BannerHomePageWidget />

        <ParallaxBackground>
          <MainContent>
            <PrizeFundWidget />

            <PositionTeamModalWidget />
          </MainContent>
        </ParallaxBackground>
      </main>
    </Meta>
  );
};

const MainContent = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 84px;
  padding: 87px 0 480px;
  
  @media (max-width: 1024px) {
    padding: 0 0 300px;
  }
  @media (max-width: 440px) {
    padding: 0 0 200px;
`;
