import {Dimensions, Platform} from 'react-native';
export let deviceWidth = Dimensions.get('window').width;
export let deviceHeight = Dimensions.get('window').height;
export const buttonCircleAbsolute = 50;
export const iconSize = 30;
export const HEIGHT_FULL_WIDTH_IMAGE = deviceHeight / 3 + 20;
export const PARALLAX_HEADER_HEIGHT = 250;
export const PARALLAX_HEADER_HEIGHT_USER = 150;
export const STICKY_HEADER_HEIGHT = Platform.OS === 'ios' ? 60 : 40 ;