import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import ImageGallery from '../../components/ImageGallery';
import Style from './Styles';

const DetailScreen = ({ navigation }) => {
  const item = navigation.getParam('item', {});

  return (
    <View style={Style.container}>
      <ImageGallery photos={item.photos} />
    </View>
  );
};

DetailScreen.navigationOptions = (screenProps) => ({
  title: screenProps.navigation.getParam('item', {}).username,
  headerRight: (
    <FastImage
      style={Style.tinyLogo}
      source={{
        uri: screenProps.navigation.getParam('item', {}).profile_image.medium,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  ),
});

export default DetailScreen;
