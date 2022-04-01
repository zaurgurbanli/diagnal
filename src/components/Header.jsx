import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {Text} from './Text';
import {IMAGES} from '../values/images';

export const Header = ({
  title = 'Romantic comedy',
  onPressBack,
  onPressSearch,
}) => {
  return (
    <ImageBackground source={IMAGES.navBar} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.5} onPress={onPressBack}>
          <Image source={IMAGES.back} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={onPressSearch}>
          <Image source={IMAGES.search} style={styles.back} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    height: 80,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.5,
  },
  back: {
    width: 20,
    height: 20,
    margin: 10,
  },
  title: {
    fontSize: 20,
    flex: 1,
    paddingHorizontal: 10,
  },
});
