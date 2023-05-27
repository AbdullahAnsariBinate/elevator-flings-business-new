import { StyleSheet } from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { themes } from '../../../../theme/colors'

export const styles = StyleSheet.create({
  uploadIcon: {
    borderWidth: 1,
    borderColor: themes['light'].colors.white,
    borderRadius: 50,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  uploadIconImg: {
    height: '50%',
    width: '50%',
  },
  uploadProImg: {
    height: '100%',
    width: '100%',
  },
  imagesContainer: {
    position: 'relative',
  },
  postDesp: {
    fontFamily: themes?.font?.regular,
    color: themes['light']?.colors?.fontBlack,
    fontSize: themes?.fontSize?.small
},
})
