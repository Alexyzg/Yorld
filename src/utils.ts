import { CoordsArr, CoordsObj } from './types';

export const getCoordsLikeArr = (coords: CoordsObj): CoordsArr => [
  coords.longitude,
  coords.latitude,
];
