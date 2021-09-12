import { ReactNode } from 'react';

type Lng = number;
type Lat = number;

export type CoordsArr = [Lng, Lat];
export type CoordsObj = {
  longitude: Lng;
  latitude: Lat;
};

export type Children = JSX.Element | ReactNode | null | (JSX.Element | null)[];
