import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
 const [name, setname] = useState('Gaye'); 

 const handleClick = () => {
    setname('Amadou')
 }
 
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.name2}>Yes my name is {name} </Text>

            <View style={styles.buttonContainer}> 
               <Button title="Update state" onPress={handleClick}/>
            </View>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor : 'yellow',
    padding: 20,
  },
  name2: {
    color: 'black',
    fontWeight: 'bold'
  },
  buttonContainer: {
    marginTop: 20,
  }
});
