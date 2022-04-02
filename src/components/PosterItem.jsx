import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import {formatImage} from '../utils/formatImage';

import {Text} from './Text';

const {width} = Dimensions.get('window');

const ratio = 182 / 272;
export const imageWidth = (width - 15 * 4) / 3;
export const imageHeight = imageWidth / ratio;

export const PosterItem = ({item}) => {
  return item.empty ? (
    <View style={styles.empty} />
  ) : (
    <View style={styles.container}>
      <Image source={formatImage(item['poster-image'])} style={styles.image} />
      <Text fontFamily="light" style={styles.name}>
        {item.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: imageWidth,
    marginBottom: 30,
  },
  image: {
    width: imageWidth,
    height: imageHeight,
  },
  name: {
    marginTop: 8,
  },
  empty: {
    width: imageWidth,
    height: imageHeight,
  },
});
