import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import 'react-native-gesture-handler';

import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './home/home';
import Search from './search/search';
import Map from './map/map';
import Information from './information/information';
import UserInfo from './user/UserInfo';

import SignUp from './signUp';
import SignIn from './signIn';

import useIsLoggedin from '../hooks/useIsLoggedin';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Index(props) {
  const isLoggedin = useIsLoggedin();
  return (
    <NavigationContainer>
      {isLoggedin ? (
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarLabel: '',
            tabBarIcon: ({focused, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Search') {
                iconName = focused ? 'search' : 'search-outline';
              } else if (route.name === 'Map') {
                iconName = focused ? 'map' : 'map-outline';
              } else if (route.name === 'Information') {
                iconName = focused
                  ? 'information-circle'
                  : 'information-circle-outline';
              } else if (route.name === 'UserInfo') {
                iconName = focused ? 'person' : 'person-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} />;
            },
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="Information" component={Information} />
          <Tab.Screen name="UserInfo" component={UserInfo} />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarVisible: false,
          })}>
          <Tab.Screen name="signin" component={SignIn} />
          <Tab.Screen name="signup" component={SignUp} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Index;
