import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import data from './data';

export default function Feed() {
    return (
        <View>
            <View style={styles.container}>
                <Text>{'\n'}</Text>
                <Text>Yostagram App {'\n'}</Text>
                <StatusBar style='auto' />
            </View>
            <FlatList
                data={data.articles}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image
                            style={styles.image}
                            source={item.image}
                        />
                        <Text>name: {item.name}</Text>
                        <Text>likes: {item.likes}</Text>
                        <Text>comments: {item.comments}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    image: {
        width: '100%',
        height: 200,
    }
});
