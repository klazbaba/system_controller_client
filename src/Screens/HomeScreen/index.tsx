import React, {Component, createContext} from 'react';
import {SafeAreaView, Animated} from 'react-native';
import net from 'react-native-tcp';
import {Toast} from 'native-base';

import {styles} from './styles';
import CustomButton from '../_Components/CustomButton';
import {colors} from '../../colors';

interface State {
  isConnected: boolean;
}

interface Props {
  navigation: {navigate: (screen: string, params?: object) => void};
}

const AnimatedButton = Animated.createAnimatedComponent(CustomButton);
export const SocketContext = createContext('glass house');

export default class HomeScreen extends Component<Props, State> {
  chatter: any[];
  socket: any;

  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
    };
    this.socket = null;
  }

  animatedValue = new Animated.Value(100);

  componentDidMount = () => {
    Animated.timing(this.animatedValue, {
      toValue: 200,
      duration: 5000,
    }).start();
  };

  handleButtonPress = () => {
    const {navigate} = this.props.navigation;
    try {
      this.socket = net.createConnection('3000', '192.168.43.178', () => {
        this.socket.on('data', data => {
          if (data.toString().trim() === 'connected') {
            this.setState({isConnected: true});
            navigate('ControlScreen', {socket: this.socket});
          }
        }),
          this.socket.on('error', (error: any) => Toast.show({text: error}));
      });
    } catch (error) {
      console.warn(error);
    }
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
