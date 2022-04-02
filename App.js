import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';

import {getMethod} from './src/api';
import {Header, PosterItem, Text} from './src/components';
import {formatArray} from './src/utils/formatArray';
import {COLORS} from './src/values/colors';

const App = () => {
  const [page, setPage] = useState({
    content: [],
    title: '',
    totalCount: 0,
    currentNumber: 0,
  });
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState({text: '', enabled: false});

  useEffect(() => {
    getPageData();
  }, [pageNumber]);

  const getPageData = async () => {
    try {
      const url = `CONTENTLISTINGPAGE-PAGE${pageNumber}.json`;
      const result = await getMethod(url);
      if (result.status) {
        const {page: response} = result.data;
        const data = {
          content: page.content.concat(response['content-items'].content),
          title: response.title,
          currentNumber: page.currentNumber + +response['page-size-returned'],
          totalCount: response['total-content-items'],
        };
        setPage(data);
      }
    } catch (error) {}
  };

  const onChangeText = text => setSearch({...search, text});
  const onPressSearch = () => setSearch({...search, enabled: !search.enabled});
  const onPressBack = () => setSearch({text: '', enabled: false});

  const loadMore = () => {
    page.currentNumber < page.totalCount && setPageNumber(pageNumber + 1);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <StatusBar barStyle="light-content" />

      <Header
        title={page.title}
        {...{search, onPressSearch, onChangeText, onPressBack}}
      />

      <FlatList
        data={formatArray(page.content, 3, search.text)}
        renderItem={({item}) => <PosterItem {...{item}} />}
        keyExtractor={(item, i) => item.name + i.toString()}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
        bounces={false}
        overScrollMode="never"
        onEndReached={loadMore}
        onEndReachedThreshold={0.8}
        ListEmptyComponent={() => (
          <Text fontFamily="bold" style={styles.noResult}>
            No result
          </Text>
        )}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  contentContainer: {
    paddingHorizontal: 15,
    paddingTop: 80,
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  noResult: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
  },
});
