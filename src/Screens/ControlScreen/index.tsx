import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import {Icon} from 'native-base';

import {styles} from './styles';
import CustomText from '../_Components/CustomText';
import {colors} from '../../colors';
import {SocketContext} from '../HomeScreen';

export default class ControlScreen extends Component {
  animatedValue: Animated.Value;

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    console.warn(props.navigation.getParam('socket'));
  }

  animateBackgroundColor = () => {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1000,
    }).start();
  };

  handleShutDown = () => {
    this.animateBackgroundColor();
  };

  render() {
    const colorConfig = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.white, colors.black],
    });

    return (
      <SocketContext.Consumer>
        {socket => (
          <SafeAreaView style={styles.container}>
            <ScrollView horizontal>
              <TouchableWithoutFeedback onPress={this.handleShutDown}>
                <Animated.View
                  style={[
                    styles.actionButtonWrapper,
                    {backgroundColor: colorConfig},
                  ]}>
                  <Icon
                    name="power-off"
                    type="FontAwesome5"
                    style={styles.icon}
                  />
                  <CustomText text="Shut Down" style={styles.shutDownText} />
                </Animated.View>
              </TouchableWithoutFeedback>
            </ScrollView>
          </SafeAreaView>
        )}
      </SocketContext.Consumer>
    );
  }
}
