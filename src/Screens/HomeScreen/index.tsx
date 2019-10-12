import React, {Component} from 'react';
import {SafeAreaView, Animated} from 'react-native';

import {styles} from './styles';
import CustomButton from '../_Components/CustomButton';

const AnimatedButton = Animated.createAnimatedComponent(CustomButton);

export default class HomeScreen extends Component {
  animatedValue = new Animated.Value(100);

  componentDidMount = () => {
    Animated.timing(this.animatedValue, {
      toValue: 200,
      duration: 5000,
    }).start();
  };

  handleButtonPress = () => {
    const socket = new WebSocket('https://192.168.43.178:3000');
    socket.onopen = () => {
      console.warn('opened');
    // socket.send('gimmie love');
    };
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AnimatedButton
          label="Connect To Server"
          style={{width: this.animatedValue}}
          onPress={this.handleButtonPress}
        />
      </SafeAreaView>
    );
  }
}
