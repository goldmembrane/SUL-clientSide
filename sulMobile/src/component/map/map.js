import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import {fetchMarker} from '../helper/fetchMap';

const styles = StyleSheet.create({
  map: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

export default function Map() {
  [markers, setMarkers] = useState([]);
  // [currentPosition, setCurrentPosition] = useState([37.4959854, 127.0664091]);
  useEffect(() => {
    fetchMarker().then((response) => setMarkers(response.data));
  }, []);
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setCurrentPosition([position.coords.latitude, position.coords.longitude]);
  //   });
  // }, [currentPosition]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 37.4959854,
          longitude: 127.0664091,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.office_name}
            description={`${marker.address}
${marker.tel}`}
          />
        ))}
      </MapView>
    </View>
  );
}
