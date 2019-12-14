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

interface Props {
  navigation: any;
}

export default class ControlScreen extends Component<Props> {
  animatedValue: Animated.Value;
  AnimatedIcon: any;
  animatedOpacity: Animated.Value;

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.animatedOpacity = new Animated.Value(1);
  }

  animateBackgroundColor = () => {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1000,
    }).start();
  };

  handleShutDown = () => {
    const {getParam} = this.props.navigation;
    this.animateBackgroundColor();
    // let socket = getParam('socket');
    // socket = JSON.parse(socket);
    // socket.write('shutdown');
    Animated.timing(this.animatedOpacity, {toValue: 0, duration: 1000}).start();
  };

  render() {
    const colorConfig = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.white, colors.black],
    });

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView horizontal>
          <TouchableWithoutFeedback onPress={this.handleShutDown}>
            <Animated.View
              style={[
                styles.actionButtonWrapper,
                {backgroundColor: colorConfig},
              ]}>
              <Animated.View style={{opacity: this.animatedOpacity}}>
                <Icon
                  name="power-off"
                  type="FontAwesome5"
                  style={styles.icon}
                />
              </Animated.View>
              <CustomText text="Shut Down" style={styles.shutDownText} />
            </Animated.View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
