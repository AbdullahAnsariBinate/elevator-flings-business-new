import { StyleSheet } from 'react-native'
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions'
import { themes } from '../../../../../theme/colors'

export const styles = StyleSheet.create({
  imagePick: {
    height: responsiveHeight(24),
    width: responsiveWidth(88),
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: themes['light']?.colors?.imgBorder,
    backgroundColor: themes['light']?.colors?.flashWhite,
    borderRadius: 10,
  },
  upload: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  post: {
    height: responsiveWidth(18),
    width: responsiveWidth(18),
  },
  cross: {
    height: responsiveWidth(2),
    width: responsiveWidth(2),
  },
  iconBorder: {
    backgroundColor: themes['light']?.colors?.red,
    borderWidth: 1,
    borderColor: themes['light']?.colors?.white,
    borderRadius: 50,
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -responsiveWidth(1),
    right: -responsiveWidth(1),
  },
  allPost: {
    // marginBottom: -responsiveHeight(2),
  },
  postDesp: {
    fontFamily: themes?.font?.regular,
    color: themes['light']?.colors?.fontBlack,
    fontSize: themes?.fontSize?.small
},
})
