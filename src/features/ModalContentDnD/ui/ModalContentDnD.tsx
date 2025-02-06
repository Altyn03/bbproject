import {
  teamsMockData,
  type PlacesTeamsObjectKeys,
  type TPlacesTeams,
  type TTeams,
} from '@/shared/constants/teamsMockData';
import { Button } from '@/shared/ui/Button';
import { CardItem, DropContainer } from '@/shared/ui/DndUI';
import { Heading } from '@/shared/ui/Typography';
import CloseIcon from '@public/images/CloseIcon.svg';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';
import { initialStatePlaces } from '../lib/constans';

interface IModalContentDnDProps {
  closeModal: () => void;
}

export const ModalContentDnD = ({ closeModal }: IModalContentDnDProps) => {
  const t = useTranslations('home');
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [dragItems, setDragItems] = useState<TTeams[]>([]);
  const [places, setPlaces] = useState<TPlacesTeams>(initialStatePlaces);

  const moveTeam = (team: TTeams, position: PlacesTeamsObjectKeys) => {
    setPlaces(prev => {
      if (prev[position]) return prev;
      const newPlaces = { ...prev, [position]: team };
      setDragItems(prevDragItems => prevDragItems.filter(el => el.id !== team.id));
      return newPlaces;
    });
  };

  const isConfirmed = typeof window !== 'undefined' && localStorage.getItem('isConfirmed') === 'true';
  const localStoragePlaces = typeof window !== 'undefined' && localStorage.getItem('places');

  useEffect(() => {
    if (isConfirmed && localStoragePlaces) {
      setConfirmed(true);
      setDragItems([]);
      setPlaces(JSON.parse(localStoragePlaces));
    } else {
      setDragItems(teamsMockData);
    }
  }, []);

  const allCount = Object.keys(places).length;
  const currentChoices = Object.values(places).filter(el => el !== null).length;

  const handleConfirm = () => {
    setConfirmed(true);
    localStorage.setItem('isConfirmed', 'true');
    localStorage.setItem('places', JSON.stringify(places));
  };

  const handleEditRanking = () => {
    setConfirmed(false);
    localStorage.removeItem('isConfirmed');
    localStorage.removeItem('places');
    setDragItems(teamsMockData);
    setPlaces(initialStatePlaces);
  };

  const handleRandomSelection = () => {
    if (confirmed) return;

    setPlaces(initialStatePlaces);
    const shuffledKeys = Object.keys(places)
      .sort(() => Math.random() - 0.5)
      .map(key => +key);
    const result: TPlacesTeams = { ...initialStatePlaces };
    shuffledKeys.forEach((key, index) => {
      result[key as PlacesTeamsObjectKeys] = teamsMockData[index];
    });

    setPlaces(result);
    setDragItems([]);
  };

  return (
    <ModalContainer>
      <Heading variant='h4' fontWeight={500} fontFamily='Roboto, sans-serif'>
        {t('selectPlace')}
      </Heading>
      <CloseButton onClick={closeModal} />
      <DndProvider backend={HTML5Backend}>
        <DnDContainer>
          <DragContainerWithButton>
            <DragContainer>
              {dragItems.map(item => (
                <CardItem key={item.id} item={item} />
              ))}
            </DragContainer>
            <Button
              size='small'
              color='secondary'
              state={confirmed ? 'disabled' : 'active'}
              text={t('randomSelection')}
              onClick={handleRandomSelection}
            />
          </DragContainerWithButton>
          <DropContainer moveTeam={moveTeam} places={places} />
        </DnDContainer>
      </DndProvider>
      <FooterModalContainer>
        <CountChoicesDiv>
          <span>{t('selected')}</span>
          <p>{currentChoices + '/' + allCount}</p>
        </CountChoicesDiv>
        <Button
          size='big'
          color='secondary'
          state={confirmed ? 'active' : 'inactive'}
          text={t('edit')}
          onClick={handleEditRanking}
        />
        <Button
          size='big'
          color='primary'
          state={allCount === currentChoices && !confirmed ? 'active' : 'disabled'}
          text={t('confirmSelection')}
          onClick={handleConfirm}
        />
      </FooterModalContainer>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34.5px;
  @media (max-width: 1200px) {
    gap: 16px;
    & > h4 {
      text-align: center;
    }
  }
`;

const CloseButton = styled(CloseIcon)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  top: 34px;
  right: 34px;

  transition: opacity 0.4s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 768px) {
    top: 16px;
    right: 16px;
  }
`;

const DnDContainer = styled.div`
  width: 100%;
  height: 578px;
  display: flex;
  justify-content: center;
  gap: 16px;
  @media (max-width: 1200px) {
    height: 100%;
    flex-direction: column;
  }
`;

const DragContainerWithButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 192px;
  @media (max-width: 1200px) {
    width: 100%;
    & > button {
      align-self: center;
      width: 240px;
      height: 40px;
    }
  }
`;

const DragContainer = styled.div`
  flex-direction: column;
  gap: 4px;
  align-items: center;
  border-radius: 8px;
  border: 4px solid #27272b;
  padding: 18px 16px;
  display: flex;
  overflow-y: scroll;
  height: 530px;

  @media (max-width: 1200px) {
    height: 170px;
    padding: 10px;
    flex-direction: row;
    overflow-y: hidden;
  }
`;

const FooterModalContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  @media (max-width: 1200px) {
    align-items: center;
    flex-direction: column;
    & > div {
      padding-left: 45px;
    }

    & > button {
      max-width: 400px;
    }
  }
`;

const CountChoicesDiv = styled.div`
  min-width: 192px;
  display: flex;
  gap: 10px;
  padding: 16px 38px 16px 32px;
  font-family: Lato, sans-serif;
  font-weight: 500;
  color: #ffffff;
  align-items: flex-end;

  & > p {
    font-size: 20px;
    line-height: 24px;
  }
  & > span {
    display: inline-block;
    font-size: 14px;
    line-height: 18px;
  }

  @media (max-width: 1200px) {
    padding: 16px;
  }
  @media (max-width: 650px) {
    padding: 0 16px;
  }
`;
