import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {Icon} from 'native-base';

import {styles} from './styles';
import CustomText from '../_Components/CustomText';

export default class ControlScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Icon name="poweroff" type="AntDesign" />
        <CustomText text="Control Screen" />
      </SafeAreaView>
    );
  }
}
