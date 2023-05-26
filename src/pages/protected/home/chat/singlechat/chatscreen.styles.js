import { StyleSheet } from 'react-native'
import { theme } from '../../../../utils/constants'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { themes } from '../../../../../theme/colors'

export const styles = StyleSheet.create({
  img: {
    height: 20,
    width: 20,
  },
  search: {
    flexDirection: 'row-reverse',
    paddingRight: 20,
    borderRadius: 15,
    backgroundColor: themes['light'].colors.offWhite,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  flats: {
    minHeight: 100,
    minWidth: 100,
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
    borderRadius: 10,
    paddingVertical:25,
    paddingHorizontal:10,
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
    backgroundColor:themes['light'].colors?.pink,
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
    request: {
    minHeight: responsiveHeight(50),
    minWidth: 100,
  },
  postName1:{
    fontFamily: themes?.font?.bold,
    color: themes['light']?.colors?.black,
    fontSize: themes?.fontSize?.regular,
    textAlign:'center'
  },
  postName: {
    fontFamily: themes?.font?.bold,
    color: themes['light']?.colors?.black,
    fontSize: themes?.fontSize?.regular
},
postSq: {
    fontFamily: themes?.font?.bold,
    color: themes['light']?.colors?.black,
    fontSize: themes?.fontSize?.small
},
postHeading: {
    fontFamily: themes?.font?.semiBold,
    color: themes['light']?.colors?.black,
    fontSize: themes?.fontSize?.small,
},
postDesp: {
    fontFamily: themes?.font?.regular,
    color: themes['light']?.colors?.fontBlack,
    fontSize: themes?.fontSize?.small
},
})
