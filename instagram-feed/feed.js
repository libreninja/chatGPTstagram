import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons'
import Constants from 'expo-constants';
import Stories from './Stories';
import data from './data';

const INSTAGRAM_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027";

export default function Feed() {

    function renderItem({ item, index }) {
        if (index === 0) {
            return (
                <>
                    <View style={styles.stories}>
                        <Stories stories={data.stories} profile={data.profile} ></Stories>
                    </View>
                </>
            )
        } else {
            return;
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='dark' />
            <View style={styles.header}>
                <TouchableOpacity>
                    <Feather name='camera' size={24} />
                </TouchableOpacity>
                <Image source={{ uri: INSTAGRAM_LOGO }} style={styles.logo} />
                <TouchableOpacity>
                    <Feather name='send' size={24} />
                </TouchableOpacity>
            </View>

            <FlatList
                data={data.articles}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderBottomColor: "#dbdbdb",
        flexDirection: "row",
        paddingHorizontal: 16,
        height: 44,
    },
    container: {
        flex: 1,
        padddingTime: Constants.statusBarHeight
    },
    logo: {
        flex: 1,
        height: 30,
        resizeMode: "contain"
    },
    stories: {
        borderBottomWidth:1,
        borderBottomColor: '#dbdbdb',
        height: 104,
        padding: 10,
        backgroundColor: "#fafafa",
    }
});
