import { TTeams } from '@/shared/constants/teamsMockData';
import { useRef } from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';

interface ICardItem {
  item: TTeams;
}

export const CardItem = ({ item }: ICardItem) => {
  const dragRef = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TEAM',
    item: item,
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  drag(dragRef);

  return (
    <CardTeamContainer ref={dragRef} isDragging={isDragging}>
      <TeamImage imageUrl={item.logo} />

      <p>{item.name}</p>
    </CardTeamContainer>
  );
};

const CardTeamContainer = styled.div<{ isDragging: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;

  padding: 11px 20px;

  opacity: 0.6;
  transition: opacity 0.2s ease-in-out;

  user-select: none;
  cursor: ${({ isDragging }) => (isDragging ? 'grabbing' : 'grab')};

  &:active {
    cursor: grabbing;
  }

  & > p {
    font-family: Lato, sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 14.4px;
    color: #ffffff;
    text-align: center;
  }

  &:hover {
    opacity: 1;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;

    width: 20px;
    height: 20px;

    transition: all 0.4s ease;
  }

  &::before {
    top: 0;
    left: 0;

    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
  }

  &::after {
    bottom: 0;
    right: 0;

    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
  }

  &:hover::before {
    border-color: #ff0025;
  }
  &:hover::after {
    border-color: #f8e800;
  }

  &:active {
    opacity: 0.7;
    &::before,
    &::after {
      display: none;
    }
    & > p {
      visibility: hidden;
    }
  }
`;

const TeamImage = styled.div<{ imageUrl: string }>`
  width: 80px;
  height: 80px;

  background-image: url(${({ imageUrl }) => `${imageUrl}`});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
