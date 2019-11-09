import React, {Component} from 'react';
import {Button} from 'native-base';
import {Text} from 'react-native';

import {styles} from './styles';

interface Props {
  label: string;
  style: object;
  labelStyle?: object;
}

export default class CustomButton extends Component<Props> {
  render() {
    const {style, label, labelStyle} = this.props;

    return (
      <Button {...this.props} style={[styles.wrapper, style]}>
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      </Button>
    );
  }
}
