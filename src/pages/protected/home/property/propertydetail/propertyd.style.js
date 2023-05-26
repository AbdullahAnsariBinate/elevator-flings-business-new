import { StyleSheet } from 'react-native'
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions'
import { themes } from '../../../../../theme/colors'

export const styles = StyleSheet.create({
  dataImg: {
    width: responsiveWidth(90),
    height: responsiveScreenHeight(24),
    alignSelf: 'center',
    borderRadius: 10,
  },
  loc: {
    width: '100%',
    height: '100%',
  },
  descContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: themes['light'].colors.lightGrey,
    paddingBottom: responsiveHeight(2),
    marginHorizontal: 15,
  },
  pastEvent: {
    paddingVertical: responsiveHeight(2),
  },
  carouselIcon: {
    width: responsiveWidth(3),
    height: responsiveWidth(3),
  },
  edit: {
    position: 'absolute',
    right: responsiveWidth(7),
    top: responsiveWidth(2),
    backgroundColor: themes['light']?.colors?.white,
    height: responsiveWidth(7),
    width: responsiveWidth(7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  dlt: {
    position: 'absolute',
    right: responsiveWidth(7),
    top: responsiveWidth(10),
    backgroundColor: themes['light']?.colors?.white,
    height: responsiveWidth(7),
    width: responsiveWidth(7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    // padding: 25,
    paddingVertical: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    marginTop: 20,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: themes['light']?.colors?.pink,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  image: {
    height: 12,
    width: 12,
  },
  cross: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
  crossBtn: {
    padding: 10,
  },
  btn: {
    paddingHorizontal: responsiveWidth(10.5),
    backgroundColor: themes['light'].colors.pink,
    height: responsiveHeight(6),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: responsiveHeight(0.5),
    borderRadius: 10,
  },
  btn1: {
    paddingHorizontal: responsiveWidth(10.5),
    height: responsiveHeight(6),
    backgroundColor: themes['light'].colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: responsiveHeight(0.5),
    borderRadius: 10,
    borderColor: themes['light'].colors.black,
    borderWidth: 2,
    marginLeft: responsiveWidth(1),
  },
  postName: {
    fontFamily: themes?.font?.bold,
    color: themes['light']?.colors?.black,
    fontSize: themes?.fontSize?.regular
  },
  btnText1: {
    fontFamily: themes?.font?.regular,
    color: themes['light']?.colors?.white,
    fontSize: themes?.fontSize?.extraSmall
  },
  btnText2: {
    fontFamily: themes?.font?.regular,
    color: themes['light']?.colors?.black,
    fontSize: themes?.fontSize?.extraSmall
  },

})
