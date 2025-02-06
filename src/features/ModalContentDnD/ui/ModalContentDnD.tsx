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
  onCloseModalHandler: () => void;
}

export const ModalContentDnD = ({ onCloseModalHandler }: IModalContentDnDProps) => {
  const t = useTranslations('home');

  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [dragItems, setDragItems] = useState<TTeams[]>([]);
  const [places, setPlaces] = useState<TPlacesTeams>(initialStatePlaces);

  const isConfirmed = typeof window !== 'undefined' && localStorage.getItem('isConfirmed') === 'true';
  const localStoragePlaces = typeof window !== 'undefined' && localStorage.getItem('places');

  const allCount = Object.keys(places).length;
  const currentChoices = Object.values(places).filter(el => el !== null).length;

  useEffect(() => {
    if (isConfirmed && localStoragePlaces) {
      setConfirmed(true);
      setDragItems([]);
      setPlaces(JSON.parse(localStoragePlaces));
    } else {
      setDragItems(teamsMockData);
    }
  }, []);

  const onMoveTeamHandler = (team: TTeams, position: PlacesTeamsObjectKeys) => {
    setPlaces(prev => {
      if (prev[position]) return prev;
      const newPlaces = { ...prev, [position]: team };

      setDragItems(prevDragItems => prevDragItems.filter(el => el.id !== team.id));

      return newPlaces;
    });
  };

  const onClickConfirmHandler = () => {
    setConfirmed(true);

    localStorage.setItem('isConfirmed', 'true');
    localStorage.setItem('places', JSON.stringify(places));
  };

  const onClickEditHandler = () => {
    setConfirmed(false);

    localStorage.removeItem('isConfirmed');
    localStorage.removeItem('places');

    setDragItems(teamsMockData);
    setPlaces(initialStatePlaces);
  };

  const onClickRandomSelectionHandler = () => {
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

      <CloseButton onClick={onCloseModalHandler} />

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
              onClick={onClickRandomSelectionHandler}
            />
          </DragContainerWithButton>

          <DropContainer onMoveTeamHandler={onMoveTeamHandler} places={places} />
        </DnDContainer>
      </DndProvider>

      <FooterModalContainer>
        <CountChoicesDiv>
          <CountChoicesTitle>{t('selected')}</CountChoicesTitle>

          <p>{currentChoices + '/' + allCount}</p>
        </CountChoicesDiv>

        <Button
          size='big'
          color='secondary'
          state={confirmed ? 'active' : 'inactive'}
          text={t('edit')}
          onClick={onClickEditHandler}
        />

        <Button
          size='big'
          color='primary'
          state={allCount === currentChoices && !confirmed ? 'active' : 'disabled'}
          text={t('confirmSelection')}
          onClick={onClickConfirmHandler}
        />
      </FooterModalContainer>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34.5px;

  width: 100%;
  height: 100%;

  @media (max-width: 1200px) {
    gap: 16px;
    & > h4 {
      text-align: center;
    }
  }
`;

const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: 34px;
  right: 34px;

  width: 20px;
  height: 20px;

  cursor: pointer;
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
  display: flex;
  justify-content: center;
  gap: 16px;

  width: 100%;
  height: 578px;

  @media (max-width: 1200px) {
    flex-direction: column;
    height: 100%;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  height: 530px;
  padding: 18px 16px;
  border-radius: 8px;
  border: 4px solid #27272b;

  overflow-y: scroll;

  @media (max-width: 1200px) {
    flex-direction: row;

    height: 170px;
    padding: 10px;
    overflow-y: hidden;
  }
`;

const FooterModalContainer = styled.div`
  display: flex;
  gap: 16px;

  width: 100%;

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
  display: flex;
  align-items: flex-end;
  gap: 10px;

  min-width: 192px;
  padding: 16px 38px 16px 32px;

  font-family: Lato, sans-serif;
  font-weight: 500;
  color: #ffffff;

  & > p {
    font-size: 20px;
    line-height: 24px;
  }

  @media (max-width: 1200px) {
    padding: 16px;
  }

  @media (max-width: 650px) {
    padding: 0 16px;
  }
`;

const CountChoicesTitle = styled.p`
  font-size: 14px;
  line-height: 18px;
`;
