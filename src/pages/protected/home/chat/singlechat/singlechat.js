import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from '../../../../../containers'
import { Searchbar } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import { themes } from '../../../../../theme/colors';
import { icons } from '../../../../../assets/imgs';

const SingleChat = () => {
    const [searchQuery, setSearchQuery] = React.useState('')
    const onChangeSearch = (query) => setSearchQuery(query)
    const headerProps = {
        showCenterLogo: false,
        backButtonIcon: 'close',
        hideBackButton: false,
        headerLeft: true,
        headerTitle: 'Chat',
        headerRight: false
    };
    return (
        <Container
            bottomSpace
            edges={['left', 'right']}
            scrollView={true}
            headerProps={headerProps}
        >
            <Searchbar
                placeholder='Search'
                onChangeText={onChangeSearch}
                placeholderTextColor={themes?.light?.colors?.grey}
                value={searchQuery}
                style={styles.search}
                icon={() => <FastImage source={icons.Search} style={styles.img} resizeMode='contain' />}
            />

        </Container>
    )
}

export default SingleChat

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row-reverse',
        paddingRight: 20,
        borderRadius: 10,
        backgroundColor: themes['light'].colors.offWhite,
        marginHorizontal: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    img: {
        height: "50%",
        width: "50%",
    }
})