import React, {Component} from 'react';
import {SafeAreaView, Animated} from 'react-native';

import {styles} from './styles';
import CustomButton from '../_Components/CustomButton';
import {colors} from '../../colors';
import {socket, connectToServer} from '../../utils/functions/Socket';

interface State {
  isConnected: boolean;
}

interface Props {
  navigation: {navigate: (screen: string, params?: object) => void};
}

const AnimatedButton = Animated.createAnimatedComponent(CustomButton);

export default class HomeScreen extends Component<Props, State> {
  animatedValue: Animated.Value;

  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
    };
    this.animatedValue = new Animated.Value(100);
  }

  componentDidMount = () => {
    Animated.timing(this.animatedValue, {
      toValue: 200,
      duration: 5000,
    }).start();
  };

  handleButtonPress = () => {
    const {navigate} = this.props.navigation;
    connectToServer();
    socket.on('data', data => {
      if (data.toString().trim() === 'connected') navigate('ControlScreen');
    });
  };

  render() {
    const {isConnected} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <AnimatedButton
          label={!isConnected ? 'Connect To Server' : 'Disconnect From Server'}
          style={{
            width: this.animatedValue,
            backgroundColor: isConnected ? colors.red : colors.green,
          }}
          onPress={this.handleButtonPress}
          labelStyle={styles.buttonLabel}
        />
      </SafeAreaView>
    );
  }
}
