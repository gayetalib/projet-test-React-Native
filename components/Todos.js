import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native'

export default function Todos(item) {
    return (
        <TouchableOpacity>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   item: {
       padding: 16,
       marginTop: 16,
       borderColor: '#bbb',
       borderWidth: 1,
       borderStyle: 'dashed',
       borderRadius:10,
       color: 'red'
   }
})
