export type TTeams = {
  id: number;
  name: string;
  logo: string;
};

export type PlacesTeamsObjectKeys = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type TPlacesTeams = {
  [key in PlacesTeamsObjectKeys]: TTeams | null;
};

export const teamsMockData: TTeams[] = [
  { id: 1, name: 'Apex', logo: '/images/teams/ApexLogo.png' },
  { id: 2, name: 'Astralis', logo: 'images/teams/AstralisLogo.png' },
  { id: 3, name: 'BIG', logo: 'images/teams/BigLogo.png' },
  { id: 4, name: 'C9', logo: 'images/teams/C9Logo.png' },
  { id: 5, name: 'Team Spirit', logo: 'images/teams/ApexLogo.png' },
  { id: 6, name: 'BB', logo: 'images/teams/AstralisLogo.png' },
  { id: 7, name: '9Pandas', logo: 'images/teams/BigLogo.png' },
  { id: 8, name: 'Falcons', logo: 'images/teams/C9Logo.png' },
  { id: 9, name: 'G2', logo: 'images/teams/ApexLogo.png' },
  { id: 10, name: 'Vitality', logo: 'images/teams/AstralisLogo.png' },
  { id: 11, name: 'Tundra', logo: 'images/teams/BigLogo.png' },
  { id: 12, name: 'Team Liquid', logo: 'images/teams/C9Logo.png' },
];
