import React, {Component} from 'react';
import {View} from 'react-native';

import {styles} from './styles';
import CustomText from '../_Components/CustomText';

export default class ControlScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomText text="Control Screen" />
      </View>
    );
  }
}
