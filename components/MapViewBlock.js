import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { MapMarker, MapView } from '@draftbit/maps';
import { withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const MapViewBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'flex-start',
          borderRadius: 0,
          height: 280,
          justifyContent: 'center',
          overflow: 'hidden',
          paddingBottom: 16,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 8,
          width: '100%',
        },
        dimensions.width
      )}
    >
      <MapView
        apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
        autoClusterMarkers={false}
        autoClusterMarkersDistanceMeters={10000}
        customMapStyle={'Beautiful West Coast Villa'}
        loadingEnabled={true}
        moveOnMarkerPress={true}
        rotateEnabled={true}
        scrollEnabled={true}
        showsPointsOfInterest={true}
        zoomEnabled={true}
        followsUserLocation={true}
        latitude={26.2389}
        loadingIndicatorColor={theme.colors.appGreen}
        longitude={73.0243}
        provider={'google'}
        showsCompass={true}
        showsUserLocation={true}
        style={StyleSheet.applyWidth(
          {
            borderRadius: 12,
            flex: 1,
            height: 220,
            overflow: 'hidden',
            width: '100%',
          },
          dimensions.width
        )}
        zoom={5}
      >
        <MapMarker
          androidUseDefaultIconImplementation={false}
          pinImageSize={50}
          tracksViewChanges={true}
          description={'My Test Address'}
          flat={true}
          latitude={26.2389}
          longitude={73.0243}
          pinColor={theme.colors.custom_rgb255_0_0}
          title={'Arvind Limba'}
        />
        <MapMarker
          androidUseDefaultIconImplementation={false}
          pinImageSize={50}
          tracksViewChanges={true}
          description={'My Test Address'}
          flat={true}
          latitude={26.9124}
          longitude={75.7873}
          pinColor={theme.colors.appGreen}
          title={'Arvind Limba'}
        />
      </MapView>
    </View>
  );
};

export default withTheme(MapViewBlock);
