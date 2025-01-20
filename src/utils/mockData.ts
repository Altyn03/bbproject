export type TCard = {
  id: number;
  level: string;
  imageUrl: string;
  count: number;
  prize: string;
};

export const cardsData: TCard[] = [
  {
    id: 1,
    level: 'elite',
    imageUrl: '/images/EliteImage.png',
    count: 12,
    prize: '10 000',
  },
  {
    id: 2,
    level: 'veteran',
    imageUrl: '/images/VeteranImage.png',
    count: 11,
    prize: '2 500',
  },
  {
    id: 3,
    level: 'сommander',
    imageUrl: '/images/CommanderImage.png',
    count: 10,
    prize: '1 000',
  },
  {
    id: 4,
    level: 'master',
    imageUrl: '/images/MasterImage.png',
    count: 19,
    prize: '500',
  },
  {
    id: 5,
    level: 'elite',
    imageUrl: '/images/EliteImage.png',
    count: 12,
    prize: '10 000',
  },
  {
    id: 6,
    level: 'veteran',
    imageUrl: '/images/VeteranImage.png',
    count: 11,
    prize: '2 500',
  },
  {
    id: 7,
    level: 'сommander',
    imageUrl: '/images/CommanderImage.png',
    count: 10,
    prize: '1 000',
  },
  {
    id: 8,
    level: 'master',
    imageUrl: '/images/MasterImage.png',
    count: 9,
    prize: '500',
  },
];
