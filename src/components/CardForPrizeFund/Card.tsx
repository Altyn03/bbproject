import { TCard } from '@/utils/mockData';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';
import FreebetIcon from '../../../public/images/FreebetIcon.svg';
import { Heading } from '../UI/Typography';

export const Card = ({ cardData }: { cardData: TCard }) => {
  const t = useTranslations('home');
  return (
    <CardContainer>
      <StyledBadge>{t(cardData.level)}</StyledBadge>
      <CardImage imageUrl={cardData.imageUrl} />
      <CardDescription>
        <Heading variant='h6' fontWeight={500} fontFamily='Gilroy-Medium, sans-serif'>
          {t('guessedTeams', { number: cardData.count })}
        </Heading>
        <Heading
          variant='h3'
          fontFamily='Gilroy-Medium, sans-serif'
          style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          {cardData.prize}
          <FreebetIcon />
        </Heading>
      </CardDescription>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27.5px;
  align-items: center;
  width: 298px;
  height: 360px;
  border-radius: 8px;
  padding: 24px 32px;
  background-color: #5658644d;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  user-select: none;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 8px 8px;
  width: fit-content;
  height: 39px;
  background: transparent;

  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 6px;
    padding: 2px;
    background-image: linear-gradient(90deg, #fb7c12 0%, #faa709 100%);
    mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    mask-composite: exclude;
  }

  font-family: 'Gilroy-Medium', sans-serif;
  font-size: 22px;
  line-height: 26.69px;
  font-weight: 500;
  letter-spacing: 0.26px;

  background: linear-gradient(90deg, #fb7c12 0%, #faa709 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const CardImage = styled.div<{ imageUrl: string }>`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  border-radius: 7px;
  width: 231px;
  height: 150px;
`;

const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  width: object-fit;
`;
