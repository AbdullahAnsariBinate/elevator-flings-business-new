import React, { Fragment } from 'react';
import { TouchableOpacity, ActivityIndicator, Animated } from 'react-native';
import styles from "./CButton.style";
import { themes } from "../../theme/colors";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from '../../assets/icons/CustomIcon';
import ProgressiveImage from '../progressiveImage/ProgressiveImage';
import { icons } from '../../assets/imgs';

const CButton = props => {
    const { title, children, loading, disabled, loaderProps, buttonText, activeOpacity, onPress, buttonStyle, theme,
        colorType, type, iconType = 'custom', iconName, iconStyle, rightIcon } = props;

    let backgroundColor = colorType;
    let borderColor = colorType;
    let textColor = colorType;

    if (type === 'without_outline') {
        backgroundColor = 'tertiary'
    } else if (type === 'outline') {
        backgroundColor = 'secondary'
    } else {
        textColor = 'tertiary'
    }
    return (
        <TouchableOpacity activeOpacity={activeOpacity}
            onPress={onPress}
            disabled={disabled || loading}
            style={[
                styles.buttonStyle,
                {
                    backgroundColor: themes['light'].colors[backgroundColor],
                    borderColor: themes['light'].colors[borderColor],
                    justifyContent: rightIcon ? 'space-between' : 'center',
                },
                (disabled || loading) && { opacity: 0.5 },
                buttonStyle
            ]}>
            {iconType === 'left' && iconName ?
                <Icon name={iconName} style={[styles.buttonIcon, iconStyle]} /> : null}
            {title ? <Fragment>
                <Animated.Text style={[
                    styles.buttonText,
                    {
                        color: themes['light'].colors[textColor]
                    },
                    buttonText
                ]}>{title}</Animated.Text>
                {iconType === 'custom' && iconName ?
                    <Icon name={iconName} style={[styles.buttonIcon, iconStyle]} /> : null}
            </Fragment> : children}
            {loading ? <ActivityIndicator {...loaderProps} style={{ marginLeft: 10 }} /> : null}
            {rightIcon ? <ProgressiveImage source={icons?.RightArrow} style={styles.buttonIconR} resizeMode='contain' /> : null}
        </TouchableOpacity>
    )
};


CButton.defaultProps = {
    title: '',
    onPress: () => null,
    colorType: 'primary',
    type: 'normal',
    activeOpacity: 0.5,
    loading: false,
    disabled: false,
    loaderProps: {
        size: 20,
        color: themes['light'].colors.tertiary,
    },
};

export default React.memo(CButton);
