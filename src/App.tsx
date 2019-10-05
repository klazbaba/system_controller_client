/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {useScreens} from 'react-native-screens';
import {createAppContainer} from 'react-navigation';

import HomeScreen from './Screens/HomeScreen';

useScreens();
const mainStack = createStackNavigator(
  {
    HomeScreen,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(mainStack);
