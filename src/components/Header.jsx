import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {Text} from './Text';
import {IMAGES} from '../values/images';
import {COLORS} from '../values/colors';

export const Header = ({
  title,
  search,
  onPressBack,
  onPressSearch,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <ImageBackground source={IMAGES.navBar} style={styles.background}>
        <View style={styles.content}>
          <TouchableOpacity activeOpacity={0.5} onPress={onPressBack}>
            <Image source={IMAGES.back} style={styles.back} />
          </TouchableOpacity>
          {search.enabled ? (
            <TextInput
              {...{onChangeText}}
              style={styles.title}
              placeholder="Search..."
              placeholderTextColor={COLORS.grey4}
              autoCapitalize="none"
            />
          ) : (
            <Text style={styles.title}>{title}</Text>
          )}
          <TouchableOpacity activeOpacity={0.5} onPress={onPressSearch}>
            <Image source={IMAGES.search} style={styles.back} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
  },
  background: {
    height: 80,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.8,
  },
  back: {
    width: 20,
    height: 20,
    margin: 15,
  },
  title: {
    flex: 1,
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontFamily: 'TitilliumWeb-SemiBold',
    color: COLORS.white,
  },
});
