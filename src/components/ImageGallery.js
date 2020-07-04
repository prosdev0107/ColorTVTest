import React, { useState } from 'react';
import { FlatList, View, Text, Dimensions, RefreshControl } from 'react-native';
import Thumbnail from './Thumbnail';

const BATCH_SIZE = 24;
const NUM_COLUMNS = 4;
const THUMBNAIL_WIDTH = Dimensions.get('window').width / NUM_COLUMNS - 6;

function ImageGallery(props) {
  const { photos } = props;
  const [isRefreshing, setIsRefreshing] = useState(false);

  const renderItem = ({ item, index }) => {
    const columnIndex = index % 4;
    return (
      <View style={{ marginLeft: columnIndex > 0 ? 8 : 0 }}>
        <Thumbnail photos={photos} curPosition={index} width={THUMBNAIL_WIDTH} />
      </View>
    );
  };

  const getItemLayout = (data, index) => ({
    length: THUMBNAIL_WIDTH,
    offset: THUMBNAIL_WIDTH * index,
    index,
  });

  const renderEmptyComponent = () => {
    return (
      <View>
        <Text>No photos found.</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={photos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      getItemLayout={getItemLayout}
      maxToRenderPerBatch={BATCH_SIZE}
      windowSize={BATCH_SIZE}
      numColumns={NUM_COLUMNS}
      removeClippedSubviews
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={() => setIsRefreshing(false)} />
      }
      columnWrapperStyle={{ marginBottom: 8 }}
      ListEmptyComponent={renderEmptyComponent}
    />
  );
}

export default ImageGallery;
