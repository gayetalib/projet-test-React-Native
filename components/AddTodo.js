import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, Button} from 'react-native';
import {useState } from "react";

export default function AddTodo({submitHandler}) {

    const [text, settext] = useState('')

    const changeHandler = (val) => {
        settext(val)
    }



    return (
        <View>
            <TextInput
               style={styles.input}
               placeholder='Type new todo'
               onChangeText={changeHandler}
            /> 
            <Button  
            onPress={() => submitHandler(text)}
            title="Add todo" 
            color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderBottomWidth: 3,
        borderBottomColor: 'pink'
    }
})
