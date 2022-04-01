import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Flatlist} from 'react-native';
import {getPosters} from './src/api';

import {Header} from './src/components/index';
import {COLORS} from './src/values/colors';

const App = () => {
  const [posters, setPosters] = useState([]);
  const [page, setPage] = useState(1);

  console.log('posters', posters);

  useEffect(() => {
    setPosters(getPosters(page));
  }, [page]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header />
      {/* <Flatlist data/> */}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});
