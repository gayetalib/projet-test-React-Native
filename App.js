import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';


export default function App() {

 const [todos, setTodos] = useState([
   {text: 'Start project gaye', key: '1'},
   {text: 'Do the modelisation', key: '2'},
   {text: 'Create github repo', key: '3'},
   {text: 'Code every day', key: '4'},
   {text: 'cool ok', key: '5'},
   {text: 'cool Amadou', key: '6'},
 ]);


 const submitHandler = (text) => {
   if (text.length > 3) {
      setTodos((prevTodo) => {
        return [
        {text: text, key: Math.random().toString()}, 
          ...prevTodo
        ]
    })
   }else{
     Alert.alert("Message d'erreur", "Entrez au moins 3 caractères !", [
       {text: "Ok"}
     ])
   }
}
 
  return (
    <TouchableWithoutFeedback onPress={() => {
       Keyboard.dismiss();
    }}>
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
            <ScrollView>
                <AddTodo submitHandler={submitHandler} />
                <View style={styles.list}>
                      <FlatList
                        data={todos}
                        renderItem={({item}) => (
                            <Text style={styles.print}>{item.text}</Text>
                        )}
                      />
                </View>
                </ScrollView>
            </View>
        </View>
    </TouchableWithoutFeedback>
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
