import type { PlacesTeamsObjectKeys, TPlacesTeams, TTeams } from '@/shared/constants/teamsMockData';
import { useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';

interface IDropContainer {
  moveTeam: (team: TTeams, position: PlacesTeamsObjectKeys) => void;
  places: TPlacesTeams;
  position: PlacesTeamsObjectKeys;
}

export const DropPlaceholderElement = ({ moveTeam, places, position }: IDropContainer) => {
  const [preImage, setPreImage] = useState<string>('');
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drop] = useDrop(() => ({
    accept: 'TEAM',
    drop(item: TTeams) {
      moveTeam(item, position);
    },
    hover(item: TTeams) {
      setPreImage(item.logo);
    },
    collect: monitor => ({
      isDragging: monitor.isOver(),
    }),
  }));

  drop(ref);

  const isLastPosition = [9, 10, 11, 12].includes(position);
  const isEmpty = !places[position];
  const showPreImage = preImage && isDragging && isEmpty;

  return (
    <StyledPlaceholder
      isEmpty={isEmpty}
      isDragging={isDragging}
      isLastPosition={isLastPosition}
      ref={ref}
      onDragOver={e => e.preventDefault()}>
      {showPreImage ? (
        <TeamImage imageUrl={preImage} small={isLastPosition} />
      ) : places[position] ? (
        <TeamImage imageUrl={places[position].logo} small={isLastPosition} />
      ) : null}
    </StyledPlaceholder>
  );
};

const StyledPlaceholder = styled.div<{
  isEmpty: boolean;
  isDragging: boolean;
  isLastPosition: boolean;
}>`
  width: ${({ isLastPosition }) => (isLastPosition ? '80px' : '100px')};
  height: ${({ isLastPosition }) => (isLastPosition ? '80px' : '100px')};
  position: relative;
  border-radius: 8px;
  transition: box-shadow 0.4s ease-in-out;
  ${({ isEmpty, isDragging }) => isDragging && isEmpty && 'box-shadow: 0px 0px 34px 0px rgba(250, 241, 241, 0.6);'}
  ${({ isEmpty }) => !isEmpty && 'box-shadow: 0px 0px 34px 0px rgba(0, 0, 0, 0.6);'}
  ${({ isEmpty, isLastPosition, isDragging }) =>
    isEmpty &&
    !isDragging &&
    `
    border: ${isLastPosition ? '6px' : '10px'} dashed #ffffff66;
    &::before {
      content: '';
      position: absolute;
      top: ${isLastPosition ? '-3px' : '-5px'};
      left: ${isLastPosition ? '-3px' : '-5px'};
      width: ${isLastPosition ? '74px' : '90px'};
      height: ${isLastPosition ? '74px' : '90px'};
      border-radius: 4px;
      padding: 4px;
      background-color: #292b32;
    }
  `}
`;

const TeamImage = styled.div<{ imageUrl?: string; small?: boolean }>`
  position: absolute;
  z-index: 1;
  width: ${({ small }) => (small ? '68px' : '80px')};
  height: ${({ small }) => (small ? '68px' : '80px')};
  background-image: url(${({ imageUrl }) => `${imageUrl}`});
  top: ${({ small }) => (small ? '6px' : '10px')};
  left: ${({ small }) => (small ? '6px' : '10px')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
