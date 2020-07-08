import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function SandBox() {
    return (
        <View style={styles.container}>
            <Text style={styles.box1}>One</Text>
            <Text style={styles.box2}>Two</Text>
            <Text style={styles.box3}>Three</Text>
            <Text style={styles.box4}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       // flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        //justifyContent: 'space-around',
        paddingTop: 40,
        backgroundColor: "#ddd",
    },
    box1: {
        flex: 1,
        backgroundColor: 'gold',
        padding: 10,
    },
    box2: {
        backgroundColor: 'violet',
        padding: 20,
    },
    box3: {
        flex: 2,
        backgroundColor: 'coral',
        padding: 30,
    },
    box4: {
        backgroundColor: 'red',
        padding: 40,
    }
})