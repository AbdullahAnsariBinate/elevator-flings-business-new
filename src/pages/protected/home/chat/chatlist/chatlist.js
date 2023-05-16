import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from '../../../../../containers';
import { Searchbar } from 'react-native-paper';
import { View as CustomView } from 'react-native-ui-lib'
import { FlashList } from '@shopify/flash-list';
import { Profile } from './chat'
import FastImage from 'react-native-fast-image';
import { icons } from '../../../../../assets/imgs';
import { themes } from '../../../../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { CButton, ChatComponent } from '../../../../../uiComponents';
import { renderNode } from 'react-native-elements/dist/helpers';
const ChatList = () => {

    const navigation = useNavigation()
    const headerProps = {
        showCenterLogo: false,
        backButtonIcon: 'close',
        hideBackButton: false,
        headerLeft: true,
        headerTitle: 'Messages',
        headerRight: false
    };
    const [searchQuery, setSearchQuery] = React.useState('')

    const onChangeSearch = (query) => setSearchQuery(query)

    const navBar = React.useCallback(() => {
    }, [])

    const handleChat = () => {
        console.log('clcic')
        navigation.navigate("singlechat")
    }
    const renderItem = ({ item }) => {
        return <ChatComponent imgs={item?.imgs} onPress={() => handleChat()} />
    }
    return (
        <Container
            bottomSpace
            edges={['left', 'right']}
            scrollView={false}
            headerProps={headerProps}
        >
            <Searchbar
                placeholder='Search'
                placeholderTextColor={themes?.light?.colors?.grey}
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.chatlist}
                icon={() => (
                    <FastImage source={icons.Search} style={styles.chatIcon} resizeMode='contain' />
                )}
            />

            <CustomView paddingH-0 flex >
                <FlashList
                    showsVerticalScrollIndicator={false}
                    data={Profile}
                    renderItem={renderItem}
                    estimatedItemSize={70}
                    contentContainerStyle={{
                        padding: 10, // Example of a supported padding prop
                        backgroundColor: themes?.light?.colors?.white, // Example of a supported backgroundColor prop
                    }}
                />
            </CustomView>
        </Container>
    )
}

export default ChatList

const styles = StyleSheet.create({
    chatlist: {
        backgroundColor: themes['light']?.colors?.offWhite,
        flexDirection: 'row-reverse',
        paddingRight: 20,
        borderRadius: 15,
        marginHorizontal: 15,
    },
    chatIcon: { height: '50%', width: '50%' }
})