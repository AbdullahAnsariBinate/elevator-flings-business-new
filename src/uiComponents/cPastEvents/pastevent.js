import { StyleSheet } from 'react-native'
import React, { memo } from 'react'
import FastImage from 'react-native-fast-image'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { CText, Core } from '..'
import { View } from 'react-native-ui-lib'
import { themes } from '../../theme/colors'


const PastEvents = ({ img, title }) => {
  return (
    <View style={styles.pastViewCont}>
      <FastImage source={img} style={styles.category} />
      <CText style={styles.text}>
        {title}
      </CText>
    </View>
  )
}

export default memo(PastEvents)

const styles = StyleSheet.create({
  category: {
    height: responsiveScreenHeight(24),
    width: responsiveScreenWidth(30),
    borderRadius: 10,
    resizeMode: 'contain',
  },
  pastViewCont: {
    marginLeft: responsiveScreenWidth(4),
    // margin: responsiveScreenWidth(4),
  },
  text:{
    fontFamily: themes?.font?.semiBold,
    color: themes['light']?.colors?.black,
    fontSize: themes?.fontSize?.small,
  }
})
