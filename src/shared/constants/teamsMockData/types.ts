export type TTeams = {
  id: number;
  name: string;
  logo: string;
};

export type PlacesTeamsObjectKeys = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type TPlacesTeams = {
  [key in PlacesTeamsObjectKeys]: TTeams | null;
};
