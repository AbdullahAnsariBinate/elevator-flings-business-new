import { FlatList, StyleSheet, Text, View } from 'react-native'
import { View as CustomView } from 'react-native-ui-lib';
import React, { useCallback } from 'react'
import { EventPost } from '../../../../../uiComponents';
import { data2 } from './data2';
import { Container } from '../../../../../containers';
import { useNavigation } from '@react-navigation/native';

const PastEvent = () => {

    const navigation = useNavigation()
    const headerProps = {
        showCenterLogo: false,
        backButtonIcon: 'close',
        hideBackButton: false,
        headerLeft: true,
        headerTitle: 'Past Events',
        headerRight: false
    };
    const handlePastEventDetail = useCallback(() => {
        navigation.navigate('pasteventdetail')
    }, [])
    const renderItem2 = ({ item }) => {
        console.log("🚀 ~ file: pastevent.js:17 ~ renderItem2 ~ item:", item)
        return <EventPost imgs={item?.images} img onPress={handlePastEventDetail} />
    }
    return (
        <Container
            bottomSpace
            edges={['left', 'right']}
            scrollView={true}
            headerProps={headerProps}
        >
            <CustomView paddingH-15 >
                <FlatList renderItem={renderItem2} data={data2} scrollEnabled={false} />
            </CustomView>


        </Container>
    )
}

export default PastEvent

const styles = StyleSheet.create({})