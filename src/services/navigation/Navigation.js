import { createStackNavigator } from 'react-navigation-stack';
// Screens
import HomeScreen from 'screens/home/HomeScreen';
import DetailScreen from 'screens/detail/DetailScreen';
import SinglePhotoScreen from 'screens/detail/SinglePhotoScreen';

import TransitionConfiguration from './TransitionConfiguration';

export const Navigator = createStackNavigator(
  {
    home: HomeScreen,
    detail: DetailScreen,
    singlePhoto: SinglePhotoScreen,
  },
  {
    transitionConfig: TransitionConfiguration,
  }
);
