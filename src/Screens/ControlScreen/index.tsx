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

export default class ControlScreen extends Component {
  animatedValue: Animated.Value;

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }

  animateBackgroundColor = () => {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1000,
    }).start();
  };

  render() {
    const colorConfig = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.white, colors.black],
    });

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView horizontal>
          <TouchableWithoutFeedback onPress={this.animateBackgroundColor}>
            <Animated.View
              style={[
                styles.actionButtonWrapper,
                {backgroundColor: colorConfig},
              ]}>
              <Icon name="power-off" type="FontAwesome5" style={styles.icon} />
              <CustomText text="Shut down" />
            </Animated.View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
