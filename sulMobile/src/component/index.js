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

import HomeScreen from './home/home';
import Search from './search/search';
import Map from './map/map';
import Information from './information/information';
import User from './user/user';

import SignUp from './signUp';
import SignIn from './signIn';

const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

class Index extends React.Component {
  render() {
    return (
      <NavigationContainer>
        {/* {store.counter.bool ? ( */}
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="Information" component={Information} />
          <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
        {/* ) : (
          <Stack.Screen name="SignIn" component={SignIn} />
        )} */}
      </NavigationContainer>
    );
  }
}

export default Index;
