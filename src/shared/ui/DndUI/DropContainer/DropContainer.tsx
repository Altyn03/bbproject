import type { PlacesTeamsObjectKeys, TPlacesTeams, TTeams } from '@/shared/constants/teamsMockData';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';
import { DropPlaceholderElement } from '../DropPlaceholderElement';

interface IDropContainer {
  onMoveTeamHandler: (team: TTeams, position: PlacesTeamsObjectKeys) => void;
  places: TPlacesTeams;
}

export const DropContainer = ({ onMoveTeamHandler, places }: IDropContainer) => {
  const t = useTranslations('home');

  const renderPlaceholders = (positions: PlacesTeamsObjectKeys[], title: string, colSpan: number) => (
    <DropGridItem colSpan={colSpan}>
      <DropTitlePlaceholder isLast={positions.length === 4}>{title}</DropTitlePlaceholder>

      <PlaceholderRow>
        {positions.map(position => (
          <DropPlaceholderElement
            key={position}
            onMoveTeamHandler={onMoveTeamHandler}
            places={places}
            position={position}
          />
        ))}
      </PlaceholderRow>
    </DropGridItem>
  );

  return (
    <DropGridContainer>
      {renderPlaceholders([1], t('singlePlace', { place: 1 }), 1)}
      {renderPlaceholders([2], t('singlePlace', { place: 2 }), 1)}
      {renderPlaceholders([3, 4], t('multiplePlaces', { place: '3-4' }), 2)}
      {renderPlaceholders([5, 6], t('multiplePlaces', { place: '5-6' }), 2)}
      {renderPlaceholders([7, 8], t('multiplePlaces', { place: '7-8' }), 2)}
      {renderPlaceholders([9, 10, 11, 12], t('multiplePlaces', { place: '9-12' }), 4)}
    </DropGridContainer>
  );
};

const DropGridContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    max-width: 100%;
    max-height: 240px;

    transform: scale(0.88);
    overflow-y: scroll;
  }
  @media (max-width: 650px) {
    overflow-x: hidden;
  }
`;

const DropGridItem = styled.div<{ colSpan: number }>`
  grid-column: span ${({ colSpan }) => colSpan};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  height: 182px;
  width: ${({ colSpan }) => (colSpan === 1 ? '192px' : colSpan === 2 ? '402px' : '818px')};
  padding: ${({ colSpan }) =>
    colSpan === 1 ? '16px 36px 24px' : colSpan === 2 ? '16px 77px 24px' : '20px 34px 24px 14px'};

  background-color: #5658644d;
  border-radius: 8px;

  @media (max-width: 650px) {
    width: 100%;
    padding: 24px;
    height: ${({ colSpan }) => (colSpan === 4 ? '270px' : 'auto')};
  }
`;

const DropTitlePlaceholder = styled.p<{ isLast?: boolean }>`
  font-family: Lato, sans-serif;
  font-weight: 500;
  text-align: center;
  color: #ffffff99;
  user-select: none;
  font-size: ${({ isLast }) => (isLast ? '20px' : '18px')};
  line-height: ${({ isLast }) => (isLast ? '24px' : '20px')};
`;

const PlaceholderRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 44px;

  @media (max-width: 650px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
  }

  @media (max-width: 450px) {
    gap: 16px;
  }
`;
