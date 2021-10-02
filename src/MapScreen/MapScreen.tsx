import React, { useEffect, useState, useMemo } from 'react';
import { SafeAreaView } from 'react-native';
import { MapboxMap } from '../MapboxMap';
import { PlaceCardOnMap } from './PlaceCardOnMap';
import { usePlaces } from '../hooks/usePlaces';
import { requestLocationPermission } from '../hooks/useRequestPermission';
import { Place } from '../types';
import { Layout } from '../Layout/Layout';
import { Grid } from '../Grid/Grid';
import { ItemCategory } from '../Category/Category';
import { getRandomColor } from '../utils';

export const MapScreen: React.FC = () => {
  const [place, setPlace] = useState<undefined | Place>();
  const [isGrid, setGrid] = useState(false);

  const [filter, setFilter] = useState<string>();
  const places = usePlaces();

  const filteredPlaces = useMemo(() => {
    return filter && places
      ? places.filter(({ type }) => type === filter)
      : places;
  }, [places, filter]);

  useEffect(() => {
    (async () => await requestLocationPermission())();
  }, []);

  const types = useMemo((): ItemCategory[] | [] => {
    return !places
      ? []
      : places
          .reduce(
            (acc: string[], { type }) =>
              acc.indexOf(type) > -1 ? acc : [...acc, type],
            [],
          )
          .map((item: string) => ({
            id: item,
            title: item,
            color: getRandomColor(),
          }));
  }, [places]);

  return (
    <SafeAreaView>
      {place && <PlaceCardOnMap place={place} />}
      <Layout
        showTime={false}
        isGrid={isGrid}
        toggleView={setGrid}
        types={types}
        setFilter={setFilter}
      >
        {isGrid ? (
          <Grid />
        ) : (
          <MapboxMap setPlace={setPlace} places={filteredPlaces} />
        )}
      </Layout>
    </SafeAreaView>
  );
};
