import { CardSwiper } from '@/features/CardSwiper';
import { Heading } from '@/shared/ui/Typography';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';

export const PrizeFundWidget = () => {
  const t = useTranslations('home');

  return (
    <PrizeFundDiv>
      <Heading variant='h2' style={{ textAlign: 'center' }} fontWeight={700}>
        {t('prizeFund')}
      </Heading>

      <CardSwiper />
    </PrizeFundDiv>
  );
};

const PrizeFundDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  z-index: 2;
  max-width: 1288px;
  padding: 0 24px;
`;
