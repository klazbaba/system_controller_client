import React, {Component} from 'react';
import {Button} from 'native-base';
import {Text} from 'react-native';

import {styles} from './styles';

interface Props {
  label: string;
  style: object;
}

export default class CustomButton extends Component<Props> {
  render() {
    const {style, label} = this.props;

    return (
      <Button style={[styles.wrapper, style]}>
        <Text style={styles.label}>{label}</Text>
      </Button>
    );
  }
}
