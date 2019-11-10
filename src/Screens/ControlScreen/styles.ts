import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  icon: {
    color: colors.red,
    position: 'absolute',
  },
  actionButtonWrapper: {
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 70,
    borderRadius: 8,
    minWidth: 70,
    marginHorizontal: 8,
  },
});
