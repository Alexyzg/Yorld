import { ReactNode } from 'react';

type Lng = number;
type Lat = number;

export type CoordsArr = [Lng, Lat];
export type CoordsObj = {
  longitude: Lng;
  latitude: Lat;
};

export type Children = JSX.Element | ReactNode | null | (JSX.Element | null)[];

enum PlacesTypes {
  Park = 'Park',
}

export type Place = {
  id: string;
  previewImage: string;
  images: string[];
  type: PlacesTypes;
  location: {
    geo: { lat: Lat; lng: Lng };
    address: string;
  };
  title: string;
  description: string | '';
  schedule: string | '';
};
