import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import { Animated, View } from 'react-native';

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

function ImageLoad(props) {
  const { placeholderColor } = props;
  const [placeholderOpacity, setPlaceholderOpacity] = useState(new Animated.Value(1));

  const onLoadEnd = () => {
    Animated.timing(placeholderOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <AnimatedFastImage onLoadEnd={onLoadEnd} {...props} />
      <Animated.View
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          opacity: placeholderOpacity,
          backgroundColor: placeholderColor,
        }}
      />
    </View>
  );
}

ImageLoad.propTypes = {
  placeholderColor: PropTypes.string.isRequired,
};

export default ImageLoad;
