import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import { DefaultTheme, TextInput } from 'react-native-paper';
import { ImageSource } from 'react-native-vector-icons/Icon';
import { themes } from '../../theme/colors';
import { CText } from '../../uiComponents'
import GlobalStyle from '../../assets/stylings/GlobalStyle';
import { icons } from '../../assets/imgs';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { forwardRef } from 'react';

const CTextfield = forwardRef((props, ref) => {
  const {
    inputContainerStyle,
    inputLabel,
    type,
    onPress,
    textStyle,
    disabled,
    inputErrorStyle,
    error,
    style,
    value,
    countryViewLoading = false,
    placeholder,
    secureTextEntry,
    placeholderTextColor,
    mode,
    multiLine,
    numberOfLines,
    icon,
    iconColor,
    outlineColor,
    bgColor,
    toggleSecure,
    activeOutlineColor,
    onChangeText,
    supportPassword,
    handleFocus,
    handleBlur
  } = props;


  const renderErrorView = () => {
    return (
      <CText style={{ ...GlobalStyle.errorTextStyle, ...inputErrorStyle }}>
        {error}
      </CText>
    );
  };
  const renderInputView = () => {
    const theme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: 'red', // change the color of the input text
        placeholder: 'grey', // change the color of the placeholder text
      },
    };
    return (
      <TextInput
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        theme={{
          colors: {
            primary: 'red', // change the color of the input text when focused
          },
        }}
        value={value}
        label={inputLabel}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        mode={mode}
        multiline={multiLine}
        numberOfLines={numberOfLines}
        onChangeText={onChangeText}
        left={
          icon && (
            <TextInput.Icon
              icon={icon}
              iconColor={iconColor}
              style={styles.leftIcon}
              size={responsiveFontSize(2.6)}
            />
          )
        }

        activeOutlineColor={activeOutlineColor}
        outlineColor={outlineColor}
        outlineStyle={{ borderRadius: 10 }}
        style={[styles.inputField, bgColor]}
        secureTextEntry={secureTextEntry}
        right={
          supportPassword && (
            <TextInput.Icon
              icon={secureTextEntry ? icons.CutEye : icons.Eye}
              iconColor={themes['light'].colors.grey}
              onPress={toggleSecure}
              size={responsiveFontSize(2.6)}
              style={styles.rightIcon}
            />
          )
        }
      />
    );
  };
  const renderSelectionView = () => {
    return (
      <TouchableOpacity
        style={[
          { ...GlobalStyle.inputStyle, ...style },
          { justifyContent: 'center' },
        ]}
        onPress={onPress}>
        <CText
          style={[
            { ...GlobalStyle.inputTextStyle, ...textStyle },
            !value && { color: themes['light'].colors.bgBlue },
          ]}>
          {value ? value : placeholder}
        </CText>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ ...GlobalStyle.inputContainer, ...inputContainerStyle, }}>
      {/* {inputLabel ? renderLabel() : null} */}
      {/* {inputSubLabel ? renderSubLabel() : null} */}
      {/* <View
        style={{
          // ...GlobalStyle.inputInnerContainer,
          // ...inputInnerContainerStyle,
          // ...(error && GlobalStyle.errorBorder),
        }}>  */}
      {type === 'view' ? renderSelectionView() : renderInputView()}
      {/* {selectedCountry && Object.keys(selectedCountry).length
          ? renderCountryView()
          : null} */}
      {/* </View> */}
      {error ? renderErrorView() : null}
    </View>
  );
});

export default memo(CTextfield);

const styles = StyleSheet.create({
  leftIcon: {
    borderRightWidth: 1,
    borderRadius: 0,
    borderColor: themes['light'].colors.grey,
    paddingRight: 8,
  },

  inputField: {
    backgroundColor: themes['light'].colors.white,
    marginTop: 5,
  }
});
