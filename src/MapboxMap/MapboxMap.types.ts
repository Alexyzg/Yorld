import { CoordsArr, Place } from "../types";

export const centerVilnius: CoordsArr = [25.279652, 54.687157];

export type SetSelectedPlace = (place: Place, coordinates: CoordsArr) => void;

export type MapboxMapProps = {
  setPlace: (place: Place | undefined) => void;
  places: Place[] | undefined;
};

export type PlaceMarkersLayerProps = {
  places?: Place[];
  setSelectedPlace: SetSelectedPlace;
};
