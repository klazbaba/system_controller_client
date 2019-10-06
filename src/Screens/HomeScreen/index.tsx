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

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AnimatedButton
          label="Connect To Server"
          style={{width: this.animatedValue}}
        />
      </SafeAreaView>
    );
  }
}
