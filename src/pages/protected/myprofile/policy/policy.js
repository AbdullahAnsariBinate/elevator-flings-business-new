import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CText } from '../../../../uiComponents';
import { Container } from '../../../../containers';
import { View as CustomView } from 'react-native-ui-lib'
import { Data } from './content'

const PrivacyPolicy = () => {
    const headerProps = {
        showCenterLogo: false,
        backButtonIcon: 'close',
        hideBackButton: false,
        headerLeft: true,
        headerTitle: 'Privacy Policy',
        headerRight: false
    };
    return (
        <Container
            bottomSpace
            edges={['left', 'right']}
            scrollView={true}
            headerProps={headerProps}
        >

            <CustomView paddingH-15>
                {Data.map((item) => {
                    return <CText style={styles?.postDesp}>{item?.content}</CText>
                })
                }
            </CustomView>

        </Container>
    )
}

export default PrivacyPolicy

const styles = StyleSheet.create({})