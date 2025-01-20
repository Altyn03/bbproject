import type { PlacesTeamsObjectKeys, TPlacesTeams, TTeams } from '@/utils/mockData/teamsMockData';
import { useRef } from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';

interface IDropContainer {
  moveTeam: (team: TTeams, position: PlacesTeamsObjectKeys) => void;
  places: TPlacesTeams;
  position: PlacesTeamsObjectKeys;
}

export const DropPlaceholderElement = ({ moveTeam, places, position }: IDropContainer) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drop] = useDrop(() => ({
    accept: 'TEAM',
    drop(item: TTeams) {
      moveTeam(item, position);
    },
    collect: monitor => ({
      isDragging: monitor.isOver(),
    }),
  }));

  drop(ref);

  const lastPosition = position === 9 || position === 10 || position === 11 || position === 12;

  const isEmpty = isDragging && !places[position];

  return (
    <>
      {lastPosition ? (
        <LastBlockDropPlaceholder isEmpty={isEmpty} ref={ref} onDragOver={e => e.preventDefault()}>
          {places[position] ? <TeamImage small imageUrl={places[position].logo} /> : null}
        </LastBlockDropPlaceholder>
      ) : (
        <DropPlaceholder isEmpty={isEmpty} ref={ref} onDragOver={e => e.preventDefault()}>
          {places[position] ? <TeamImage imageUrl={places[position].logo} /> : null}
        </DropPlaceholder>
      )}
    </>
  );
};

const DropPlaceholder = styled.div<{ isEmpty: boolean }>`
  width: 100px;
  height: 100px;
  position: relative;
  border: 10px dashed #ffffff66;
  border-radius: 8px;
  transition: box-shadow 0.4s ease-in-out;
  ${({ isEmpty }) => isEmpty && 'box-shadow: 0px 0px 34px 0px rgba(250, 241, 241, 0.6);'}
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    width: 90px;
    height: 90px;
    border-radius: 4px;
    padding: 4px;
    background-color: #292b32;
  }
`;

const LastBlockDropPlaceholder = styled.div<{ isEmpty: boolean }>`
  width: 80px;
  height: 80px;
  position: relative;
  border: 6px dashed #ffffff66;
  border-radius: 8px;
  transition: box-shadow 0.4s ease-in-out;
  ${({ isEmpty }) => isEmpty && 'box-shadow: 0px 0px 34px 0px rgba(250, 241, 241, 0.6);'}
  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    width: 74px;
    height: 74px;
    border-radius: 4px;
    padding: 4px;
    background-color: #292b32;
  }
`;

const TeamImage = styled.div<{ imageUrl: string; small?: boolean }>`
  position: absolute;
  z-index: 1;
  width: ${({ small }) => (small ? '68px' : '80px')};
  height: ${({ small }) => (small ? '68px' : '80px')};
  background-image: url(${({ imageUrl }) => `${imageUrl}`});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
