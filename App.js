import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {

 const [person, setPerson] = useState([
   {name: 'Amadou', key: '1'},
   {name: 'Modou', key: '2'},
   {name: 'Ousmane', key: '3'},
   {name: 'Malick', key: '4'},
   {name: 'Moussa', key: '5'},
   {name: 'Demba', key: '6'},
   {name: 'Ngoné', key: '7'},
   {name: 'Adja', key: '8'}
 ]); 

 
  return (
    <View style={styles.container}>
      <ScrollView>
          {
            person.map((item) => (
                <View>
                    <Text style={styles.item}>{item.name}</Text>
                </View>
              ) 
            )
          }
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
