import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from '../../../../containers'
import { View as CustomView } from 'react-native-ui-lib'
import { CText } from '../../../../uiComponents'
import { Data } from './content'
import {styles} from '.././MyProfile.style'

const TermAndCondition = () => {
    const headerProps = {
        showCenterLogo: false,
        backButtonIcon: 'close',
        hideBackButton: false,
        headerLeft: true,
        headerTitle: 'Terms & conditions',
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

export default TermAndCondition

