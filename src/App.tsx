/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {useScreens} from 'react-native-screens';
import {createAppContainer} from 'react-navigation';
import {Root} from 'native-base';

import HomeScreen from './Screens/HomeScreen';
import ControlScreen from './Screens/ControlScreen';

useScreens();
const mainStack = createStackNavigator(
  {
    HomeScreen,
    ControlScreen,
  },
  {
    headerMode: 'none',
  },
);

const Routes = createAppContainer(mainStack);

export default class App extends Component {
  render() {
    return (
      <Root>
        <Routes />
      </Root>
    );
  }
}
