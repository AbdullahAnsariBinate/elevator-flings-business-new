import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import { ImageSource } from 'react-native-vector-icons/Icon';
import { themes } from '../../theme/colors';
import { CText } from '../../uiComponents'
import GlobalStyle from '../../assets/stylings/GlobalStyle';

const CTextfield = props => {
  const [color, setColor] = React.useState(themes.light.colors.grey);
  const {
    placeHolder,
    icon,
    secure,
    supportSecure,
    toggleSecure,
    spacing,
    label,
    bgColor,
    mode,
    outlineColor,
    newColor,
    multiLine,
    numberOfLines,
    text,
    inputContainerStyle,
    inputInnerContainerStyle,
    inputLabel,
    inputLabelStyle,
    inputSubLabel,
    inputSubLabelStyle,
    type,
    onPress,
    selectedCountry,
    textStyle,
    disabled,
    leftIconName,
    toggleLeftIconFunc,
    leftIconButtonStyle,
    iconStyle,
    inputErrorStyle,
    error='type right input',
    toggleRightIconFunc,
    rightIconButtonStyle,
    rightIconName,
    rightButton,
    style,
    value,
    countryView,
    countryViewLoading = false,
    placeholder,
    secureTextEntry = false,
  } = props;


  const renderErrorView = () => {
    return (
      <CText style={{ ...GlobalStyle.errorTextStyle, ...inputErrorStyle }}>
        {error}
      </CText>
    );
  };
  const renderInputView = () => {
    return (
      <TextInput
        label={label}
        value={text}
        placeholder={placeHolder}
        placeholderTextColor={themes?.light?.colors?.black}
        onChangeText={text => setText(text)}
        mode={mode ? 'flat' : 'outlined'}
        multiline={multiLine}
        numberOfLines={numberOfLines}
        left={
          icon && (
            <TextInput.Icon
              icon={icon}
              iconColor={outlineColor ? 'blue' : 'green'}
              style={styles.leftIcon}
              size={16}
            />
          )
        }
        activeOutlineColor={themes?.light?.colors?.pink}
        outlineColor={outlineColor}
        outlineStyle={{ borderRadius: 12 }}
        style={[
          { backgroundColor: themes?.light?.colors?.white, marginTop: 5 },
          bgColor,
        ]}
        secureTextEntry={secure}
        onFocus={() => {
          setColor(themes?.light?.colors?.red);
        }}
        right={
          supportSecure && (
            <TextInput.Icon
              icon={secure ? icons.Eye : icons.CutEye}
              iconColor={themes?.light?.colors?.grey}
              onPress={toggleSecure}
              size={16}
            />
          )
        }
      />
    );
  };
  return (
    <View style={{ ...GlobalStyle.inputContainer, ...inputContainerStyle }}>
      {/* {inputLabel ? renderLabel() : null} */}
      {/* {inputSubLabel ? renderSubLabel() : null} */}
      {/* <View
        style={{
          ...GlobalStyle.inputInnerContainer,
          ...inputInnerContainerStyle,
          ...(error && GlobalStyle.errorBorder),
        }}> */}
        {/* {leftIconName ? renderLeftIcon() : null} */}
        {type === 'view' ? renderSelectionView() : renderInputView()}
        {/* {selectedCountry && Object.keys(selectedCountry).length
          ? renderCountryView()
          : null} */}
        {/* {rightIconName ? renderRightIcon() : null} */}
        {/* {rightButton ? rightButton() : null} */}
      {/* </View> */}
      {error ? renderErrorView() : null}
    </View>
  );
};

export default CTextfield;

const styles = StyleSheet.create({});
