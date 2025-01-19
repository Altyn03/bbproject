import { Button } from '@/components/UI/Button';
import { Heading } from '@/components/UI/Typography';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';

export const Home = () => {
  const t = useTranslations('home');
  return (
    <main>
      <BannerContainer>
        <TitleContainer>
          <TitleDescription>
            <Heading variant='h1'>{t('homePageTitle')}</Heading>
            <Heading variant='h5' fontFamily='Open Sans, sans-serif'>
              {t('homePageDescription')}
            </Heading>
          </TitleDescription>
          <Button size='big' color='primary' width='242px' text={t('takePart')} />
        </TitleContainer>
        <BannerBgDark />
        <BannerBgImageLeft />
        <BannerImageContent />
        <BannerBgImageRight />
      </BannerContainer>
      <section></section>
    </main>
  );
};

const BannerContainer = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 186px 200px;
  width: 100%;
  height: 655px;
  background-color: #2d2929;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(/images/BannerMainBg.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    mix-blend-mode: color-burn;
  }

  @media (max-width: 768px) {
    padding: 150px 60px;
  }
  @media (max-width: 440px) {
    padding: 130px 30px;
  }
`;

const BannerImageContent = styled.div`
  position: absolute;
  top: -20px;
  right: 100px;
  background-image: url(/images/BannerImage.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 907px;
  height: 698px;
  z-index: 1;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const BannerBgImageLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(/images/BannerBGLeft.svg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 568px;
  height: 302px;
  z-index: -1;

  @media (max-width: 768px) {
    width: 468px;
    height: 202px;
  }
  @media (max-width: 440px) {
    width: 368px;
    height: 162px;
  }
`;

const BannerBgImageRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-image: url(/images/BannerBGRight.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 1419px;
  height: 655px;
  z-index: -1;

  @media (max-width: 1024px) {
    display: none;
  }
`;
const BannerBgDark = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-image: url(/images/BannerBGDark.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 1920px;
  height: 655px;
  z-index: -1;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 666px;
  max-height: 282px;
  z-index: 2;

  @media (max-width: 440px) {
    text-align: center;
  }
`;

const TitleDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
