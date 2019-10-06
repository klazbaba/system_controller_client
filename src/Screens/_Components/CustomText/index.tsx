import React from 'react';
import {Text} from 'react-native';

import {style} from './style';

interface Props {
  text: string;
}

const CustomText = (props: Props) => (
  <Text style={style.text}>{props.text}</Text>
);

export default CustomText;
