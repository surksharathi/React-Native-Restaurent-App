import React from 'react';
import { View, Text } from 'react-native';
import { SafeArea } from '../../../components/utlity/safe-area.component';
import MapView from 'react-native-maps';

export function MapScreen() {
  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }
  return (
    <SafeArea >
      <Text>MapScreen</Text>
      <MapView region={region} style={{height:"100%"}}/>
     </SafeArea>
  );
}
