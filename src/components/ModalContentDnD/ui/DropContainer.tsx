import type { PlacesTeamsObjectKeys, TPlacesTeams, TTeams } from '@/utils/mockData/teamsMockData';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';
import { DropPlaceholderElement } from './DropPlaceholderElement';

interface IDropContainer {
  moveTeam: (team: TTeams, position: PlacesTeamsObjectKeys) => void;
  places: TPlacesTeams;
}

export const DropContainer = ({ moveTeam, places }: IDropContainer) => {
  const t = useTranslations('home');
  return (
    <DropGridContainer>
      <DropGridItemOnePlace colSpan={1}>
        <DropTitlePlaceholder>{t('singlePlace', { place: 1 })}</DropTitlePlaceholder>
        <DropPlaceholderElement moveTeam={moveTeam} places={places} position={1} />
      </DropGridItemOnePlace>
      <DropGridItemOnePlace colSpan={1}>
        <DropTitlePlaceholder>{t('singlePlace', { place: 2 })}</DropTitlePlaceholder>
        <DropPlaceholderElement moveTeam={moveTeam} places={places} position={2} />
      </DropGridItemOnePlace>
      <DropGridItemTwoPlace colSpan={2}>
        <DropTitlePlaceholder>{t('multiplePlaces', { place: '3-4' })}</DropTitlePlaceholder>
        <DropPlaceholderDivRow>
          <DropPlaceholderElement moveTeam={moveTeam} places={places} position={3} />
          <DropPlaceholderElement moveTeam={moveTeam} places={places} position={4} />
        </DropPlaceholderDivRow>
      </DropGridItemTwoPlace>
      <DropGridItemTwoPlace colSpan={2}>
        <DropTitlePlaceholder>{t('multiplePlaces', { place: '5-6' })}</DropTitlePlaceholder>
        <DropPlaceholderDivRow>
          <DropPlaceholderElement moveTeam={moveTeam} places={places} position={5} />
          <DropPlaceholderElement moveTeam={moveTeam} places={places} position={6} />
        </DropPlaceholderDivRow>
      </DropGridItemTwoPlace>
      <DropGridItemTwoPlace colSpan={2}>
        <DropTitlePlaceholder>{t('multiplePlaces', { place: '7-8' })}</DropTitlePlaceholder>
        <DropPlaceholderDivRow>
          <DropPlaceholderElement moveTeam={moveTeam} places={places} position={7} />
          <DropPlaceholderElement moveTeam={moveTeam} places={places} position={8} />
        </DropPlaceholderDivRow>
      </DropGridItemTwoPlace>
      <DropGridItemFourPlace colSpan={4}>
        <LastBlockDropTitlePlaceholder>{t('multiplePlaces', { place: '9-12' })}</LastBlockDropTitlePlaceholder>
        <LastBlockPlaceholderDivRow>
          <DropPlaceholderElement moveTeam={moveTeam} places={places} position={9} />
          <DropPlaceholderElement moveTeam={moveTeam} places={places} position={10} />
          <DropPlaceholderElement moveTeam={moveTeam} places={places} position={11} />
          <DropPlaceholderElement moveTeam={moveTeam} places={places} position={12} />
        </LastBlockPlaceholderDivRow>
      </DropGridItemFourPlace>
    </DropGridContainer>
  );
};

const DropGridContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1200px) {
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    transform: scale(0.88);
    max-height: 240px;
    overflow-y: scroll;
  }
  @media (max-width: 650px) {
    overflow-x: hidden;
  }
`;
const DropGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #5658644d;
  border-radius: 8px;
  gap: 20px;
  height: 182px;
`;

const DropGridItemOnePlace = styled(DropGridItem)<{ colSpan: number }>`
  grid-column: span ${({ colSpan }) => colSpan};
  width: 192px;
  padding: 16px 36px 24px;
`;
const DropGridItemTwoPlace = styled(DropGridItem)<{ colSpan: number }>`
  grid-column: span ${({ colSpan }) => colSpan};
  width: 402px;
  padding: 16px 77px 24px;
  @media (max-width: 650px) {
    width: 100%;
    padding: 24px;
  }
`;
const DropGridItemFourPlace = styled(DropGridItem)<{ colSpan: number }>`
  grid-column: span ${({ colSpan }) => colSpan};
  width: 818px;
  padding: 20px 34px 24px 14px;
  @media (max-width: 650px) {
    width: 100%;
    padding: 24px;
    height: 500px;
  }
`;

const DropTitlePlaceholder = styled.p`
  font-size: 18px;
  line-height: 22px;
  font-family: Lato, sans-serif;
  font-weight: 500;
  text-align: center;
  color: #ffffff99;
  user-select: none;
`;

const DropPlaceholderDivRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 650px) {
    justify-content: center;
    gap: 44px;
  }
  @media (max-width: 450px) {
    justify-content: center;
    gap: 24px;
  }
  @media (max-width: 400px) {
    justify-content: center;
    gap: 14px;
  }
`;

const LastBlockDropTitlePlaceholder = styled(DropTitlePlaceholder)`
  font-size: 20px;
  line-height: 24px;
`;

const LastBlockPlaceholderDivRow = styled.div`
  display: flex;
  gap: 44px;
  @media (max-width: 1200px) {
    flex-direction: row;
    gap: 44px;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 24px;
  }
`;
