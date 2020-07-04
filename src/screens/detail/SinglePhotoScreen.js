import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import Swiper from 'react-native-swiper';
import ImageLoad from '../../components/ImageLoad';
import colors from 'colors';

function SinglePhotoScreen(props) {
  const { navigation } = props;
  const { photos, curPosition } = navigation.state.params;

  return (
    <ScrollView
      maximumZoomScale={5}
      minimumZoomScale={1}
      style={{ backgroundColor: colors.gray.veryLight }}
      contentContainerStyle={{ flex: 1 }}
    >
      <Swiper index={curPosition} showsButtons={true}>
        {photos.map((photo) => {
          return (
            <ImageLoad
              style={{ width: '100%', height: '100%' }}
              source={{ uri: photo.urls.full }}
              resizeMode={FastImage.resizeMode.contain}
              placeholderColor={colors.gray.veryLight}
            />
          );
        })}
      </Swiper>
    </ScrollView>
  );
}

SinglePhotoScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SinglePhotoScreen;
