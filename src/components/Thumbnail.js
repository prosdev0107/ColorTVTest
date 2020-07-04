import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { TouchableHighlight } from 'react-native';
import colors from 'colors';
import ImageLoad from './ImageLoad';

function Thumbnail(props) {
  const { navigation, photos, curPosition, width } = props;

  const handleNavigate = () => {
    navigation.navigate('singlePhoto', {
      photos,
      curPosition,
      transition: 'scaleOut',
    });
  };

  return (
    <TouchableHighlight
      style={{ width, height: width }}
      onPress={handleNavigate}
      underlayColor={colors.gray.veryLight}
    >
      <ImageLoad
        style={{ width: '100%', height: '100%' }}
        source={{ uri: photos[curPosition].urls.thumb }}
        placeholderColor={colors.light.primary}
      />
    </TouchableHighlight>
  );
}

Thumbnail.propTypes = {
  navigation: PropTypes.object.isRequired,
  photo: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
};

export default withNavigation(Thumbnail);
