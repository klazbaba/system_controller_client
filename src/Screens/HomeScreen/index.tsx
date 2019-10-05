import React, {Component} from 'react';
import {SafeAreaView, TouchableOpacity, Text} from 'react-native';

import {styles} from './styles';

export default class HomeScreen extends Component {
  render() {
    return <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Text>Press Me</Text>
      </TouchableOpacity>
    </SafeAreaView>;
  }
}
