import React from 'react';
import {Text as RNText} from 'react-native';

import {COLORS} from '../values/colors';

export const Text = ({children, fontFamily = 'regular', style, ...rest}) => {
  const styles = {
    color: COLORS.white,
    fontFamily: `TitilliumWeb-${fontFamily
      .charAt(0)
      .toUpperCase()}${fontFamily.slice(1)}`,
    ...style,
  };
  return (
    <RNText style={styles} {...rest}>
      {children}
    </RNText>
  );
};
