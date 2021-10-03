import MapboxGL from '@react-native-mapbox-gl/maps';
import { useState } from 'react';

export const useSwitchBetweenMarkersDots = (
  mapRef: React.MutableRefObject<MapboxGL.MapView>,
) => {
  const [showMarkers, setShowMarkers] = useState(true);
  const zoomLevelListener = async () => {
    const zoomLevel = await mapRef.current.getZoom();
    setShowMarkers(zoomLevel > 14);
  };

  return {
    showMarkers,
    zoomLevelListener,
  };
};
