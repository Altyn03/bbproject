import { PrizeFund } from '@/components/PrizeFund';
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
      <MainContent>
        <MainContentFlashImage />
        <MainContentAwpImage />
        <MainContentPachkaImage />
        <PrizeFund />
        <ContainerGradientWithButton>
          <LargeGradientDiv />
          <SmallGradientDiv />
          <ButtonContainer>
            <Button size='big' color='primary' shadow width='242px' text={t('arrangeTeams')} />
          </ButtonContainer>
        </ContainerGradientWithButton>
      </MainContent>
    </main>
  );
};

// Banner

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

// Нижняя секция

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

const MainContentFlashImage = styled.div`
  position: absolute;
  top: 123px;
  left: 130px;
  background-image: url(/images/FlashImage.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 420px;
  height: 420px;
  z-index: 1;

  @media (max-width: 1024px) {
    width: 220px;
    height: 220px;
  }

  @media (max-width: 440px) {
    left: 30px;
    width: 180px;
    height: 180px;
  }
`;
const MainContentAwpImage = styled.div`
  position: absolute;
  top: 621px;
  right: 28px;
  background-image: url(/images/AWPImage.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 500px;
  height: 500px;
  z-index: 1;

  @media (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const MainContentPachkaImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-image: url(/images/PachkaImage.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 654px;
  height: 623px;
  z-index: 1;

  @media (max-width: 1024px) {
    width: 454px;
    height: 423px;
  }

  @media (max-width: 440px) {
    left: 115px;
    width: 254px;
    height: 223px;
  }
`;

const ContainerGradientWithButton = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 602px;
  height: 236px;
  border-radius: 8px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background-color: #27282ee5;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(/images/BgNoize.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    mix-blend-mode: color-burn;
  }

  @media (max-width: 768px) {
    width: 78%;
    height: 150px;
  }
`;

const LargeGradientDiv = styled.div`
  position: absolute;
  z-index: 2;
  top: -165px;
  left: -227px;
  width: 675px;
  height: 675px;
  border-radius: 50%;
  background: radial-gradient(circle, #48484c 0%, transparent 70%, transparent 100%);
`;
const SmallGradientDiv = styled.div`
  position: absolute;
  z-index: 2;
  top: -241px;
  right: -226px;
  width: 556px;
  height: 556px;
  border-radius: 50%;
  background: radial-gradient(circle, #48484c 0%, transparent 70%, transparent 100%);
`;
// const WhiteBgDiv = styled.div`
//   width: 100%;
//   height: 100%;
//   background-color: #00000066;
//   z-index: 2;
// `;

const ButtonContainer = styled.div`
  z-index: 3;
`;
