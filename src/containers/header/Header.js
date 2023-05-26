import React from 'react';
import SafeAreaView from '../safeAreaView/SafeAreaView';
import { View, TouchableOpacity } from 'react-native';
import Styles from './Header.style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icons from '../../assets/icons/CustomIcon';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { getLayoutDirection } from '../../utils/methods';
import { CText, ProgressiveImage } from '../../uiComponents';
// import {CText, ProgressiveImage} from "../../uiComponents";
import Entypo from 'react-native-vector-icons/Entypo'
import { View as CustomView } from 'react-native-ui-lib';
import { icons } from '../../assets/imgs';
import FastImage from 'react-native-fast-image';

function Header(props) {
  const navigation = useNavigation();

  const {
    headerLeft,
    headerTitle = ' ',
    headerTitleElement,
    headerRight = true,
    backOnPress,
    style,
    showCart = false,
    hideBackButton = true,
    backButtonIcon = 'back-arrow',
    showCenterLogo = false,
    goBackWithRoute,
    transparent,
    theme,
    headerLeftTitle,
    icon1,
    icon2,
    icon3,
    handleIcon1,
    handleIcon2,
    handleIcon3,
    icon3Style
  } = props;

  const { isLoggedIn } = useSelector(({ auth }) => {
    return {
      isLoggedIn: auth.isLoggedIn,
    };
  });
  const addCart = useSelector(state => state.cart);
  console.log('🚀 ~ file: Header.js ~ line 31 ~ Header ~ addCart', addCart);

  const renderHeaderTitle = title => {
    return (
      <CText
        style={Styles.headerTitleStyle}
        numberOfLines={1}>
        {title}
      </CText>
    );
  };

  const backPress = () => {
    // if(goBackWithRoute){
    //     navigation.reset({
    //         index: 0,
    //         routes: [{name: 'Home'}],
    //     });
    // navigation.goBack()
    // navigation.navigate(goBackWithRoute);
    // } else
    if (backOnPress) {
      backOnPress();
    } else {
      navigation.goBack();
    }
  };

  const backButton = () => {
    return hideBackButton ? (
      <TouchableOpacity style={Styles.headerButton} onPress={() => backPress()}>
        <Entypo
          name={'chevron-left'}
          style={[
            Styles.headerButtonIcon,
            { transform: [{ scaleX: getLayoutDirection() ? -1 : 1 }] },
          ]}
        />
      </TouchableOpacity>
    ) : (
      <View style={{ minWidth: 24 }} />
    );
  };

  const menuButton = () => {
    return (
      <View style={Styles.headerButton}>
        <CText style={Styles.headerLeftTitle}>{headerLeftTitle}</CText>
      </View>
    );
  };

  const cartButton = () => {
    return (
      <TouchableOpacity
        style={[
          Styles.headerCartButton,
          theme === 'light' && Styles.headerCartLight,
        ]}
        onPress={() => navigation.navigate('Cart')}>
        {addCart?.length > 0 && (
          <View style={Styles.headerCartBadge}>
            <CText style={Styles.headerCartBadgeText}>{addCart?.length}</CText>
          </View>
        )}
        <AntDesign
          name="shoppingcart"
          style={[
            Styles.headerCartButtonIcon,
            theme === 'light' && Styles.headerLight,
          ]}
        />
      </TouchableOpacity>
    );
  };

  const otherOptionsButton = () => {
    return (
      <View>
        {/* <CText style={{ color: 'black' }}>right Options</CText> */}
        <CustomView style={Styles.leftHeader} row >
          {icon1 && <TouchableOpacity onPress={handleIcon1}>
            <FastImage source={icon1} style={Styles.icons} resizeMode='contain' />
          </TouchableOpacity>
          }
          {icon2 && <TouchableOpacity onPress={handleIcon2}>
            <FastImage source={icon2} style={Styles.icons} resizeMode='contain' />
          </TouchableOpacity>
          }
          {icon3 && <TouchableOpacity marginL-5 onPress={handleIcon3}>
            <FastImage source={icon3} style={[Styles.icons, icon3Style]} resizeMode='contain' />
          </TouchableOpacity>
          }
        </CustomView>
      </View>
    );
  };

  const centerLogo = () => {
    return (
      <View style={Styles.headerLogo}>
        <ProgressiveImage
          style={Styles.headerLogoImage}
          source={require('../../assets/images/logo.png')}
        />
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[
        Styles.headerStyle,
        transparent && Styles.headerTransparentStyle,
        style,
      ]}
      edges={['top']}>
      <View
        style={[
          Styles.container,
          transparent && Styles.headerTransparentStyle,
        ]}>
        <CustomView width={'25%'} left centerV >
          {headerLeft ? menuButton() : backButton()}
        </CustomView>
        <CustomView width={'48%'} centerH >
          {showCenterLogo
            ? centerLogo()
            : headerTitleElement
              ? headerTitleElement()
              : headerTitle
                ? renderHeaderTitle(headerTitle)
                : null}
        </CustomView>
        <CustomView width={'25%'} right centerV >
          {headerRight ? otherOptionsButton() : null}
        </CustomView>
      </View>
    </SafeAreaView>
  );
}

export default React.memo(Header);
