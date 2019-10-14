import React, {Component} from 'react';
import {SafeAreaView, Animated} from 'react-native';
import net from 'react-native-tcp';

import {styles} from './styles';
import CustomButton from '../_Components/CustomButton';

const AnimatedButton = Animated.createAnimatedComponent(CustomButton);

export default class HomeScreen extends Component {
  chatter: any[];

  constructor(props) {
    super(props);
    this.chatter = [];
  }

  animatedValue = new Animated.Value(100);

  componentDidMount = () => {
    Animated.timing(this.animatedValue, {
      toValue: 200,
      duration: 5000,
    }).start();
  };

  handleButtonPress = () => {
    const socket = net.createConnection('3000', '192.168.43.178', () =>
      socket.write('Running...'),
    );
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
