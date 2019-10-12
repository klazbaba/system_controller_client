import {StyleSheet} from 'react-native';

import {colors} from '../../../colors';

export const styles = StyleSheet.create({
  label: {
    color: colors.white,
  },
  wrapper: {
    borderRadius: 8,
    minWidth: 150,
    justifyContent: 'center',
    elevation: 32,
    backgroundColor: colors.green,
    shadowOffset: {height: 24, width: 8},
    shadowColor: colors.lightgrey,
    shadowOpacity: 0.5,
  },
});
