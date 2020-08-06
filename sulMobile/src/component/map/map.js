import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

import currentImage from '../../../assets/icon/radio-button-on-outline.jpg';

import MapView, {PROVIDER_GOOGLE, Marker, Circle} from 'react-native-maps';

import Geolocation from 'react-native-geolocation-service';

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
  [currentPosition, setCurrentPosition] = useState([37.4959854, 127.0664091]);

  // Get currentPosition
  useEffect(() => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always');
    }

    Geolocation.getCurrentPosition(
      (position) => {
        // console.log(position);
        setCurrentPosition([
          position.coords.latitude,
          position.coords.longitude,
        ]);
        // console.log(currentPosition);
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  useEffect(() => {
    _watchId = Geolocation.watchPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        setCurrentPosition([latitude, longitude]);
      },
      (error) => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
        interval: 5000,
        fastestInterval: 2000,
      },
    );
  });

  // Get all markers
  useEffect(() => {
    fetchMarker().then((response) => setMarkers(response.data));
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: currentPosition[0],
          longitude: currentPosition[1],
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Circle
          key={(currentPosition[0] + currentPosition[1]).toString()}
          center={{latitude: currentPosition[0], longitude: currentPosition[1]}}
          radius={600}
          strokeWidth={1}
          strokeColor={'#1a66ff'}
          fillColor={'rgba(230,238,255,0.5)'}
        />
        <Circle
          key={currentPosition[0].toString()}
          center={{latitude: currentPosition[0], longitude: currentPosition[1]}}
          radius={50}
          strokeWidth={1}
          strokeColor={'white'}
          fillColor={'rgba(65,105,225,1)'}
        />
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
