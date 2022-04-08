import {View, Text} from 'react-native';
import React from 'react';

import styles from './styles';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

const Button = ({color, title, imdb, size}) => {
  // Const
  const Size = size ? {paddingHorizontal: size.w, paddingVertical: size.h} : '';
  return (
    <View style={styles.Wrap}>
      {color ? (
        <View style={styles.wrapYellow}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={[FONTS.h2, {color: COLORS.black, textAlign: 'center'}]}>
              {title} {imdb}
            </Text>
          </View>
        </View>
      ) : (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={[FONTS.h2, {color: COLORS.white, textAlign: 'center'}]}>
              {title}
            </Text>
          </View>
      )}
    </View>
  );
};

export default Button;