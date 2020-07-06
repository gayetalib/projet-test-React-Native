import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import Todos from './components/Todos';

export default function App() {

 const [todos, setTodos] = useState([
   {text: 'Start project', key: '1'},
   {text: 'Do the modelisation', key: '2'},
   {text: 'Create github repo', key: '3'},
   {text: 'Code every day', key: '4'},
   {text: 'Publish the project', key: '5'},
 ]);


 
 
  return (
    <View style={styles.container}>
         <Header/>
         <View style={styles.content}>
            <View style={styles.list}>
                <FlatList
                   data={todos}
                   renderItem={({item}) => (
                      <Text style={styles.print}>{item.text}</Text>
                   )}
                />
            </View>
         </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    padding: 40
  },
  print: {
       padding: 16,
       marginTop: 16,
       borderColor: '#bbb',
       borderWidth: 1,
       borderStyle: 'dashed',
       borderRadius:10,

  }
});
