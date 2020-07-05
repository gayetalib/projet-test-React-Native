import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
 const [name, setname] = useState('Gaye'); 

 const handleClick = () => {
    setname('Amadou')
 }
 
  return (
    <View style={styles.container}>
        <View style={styles.header}>

             <Text>Prénom : </Text>
             <TextInput 
             placeholder="Enter votre prénom "
             onChangeText={(val)=>setname(val)} 
             style={styles.input}/>

             <Text>Age : </Text>
             <TextInput 
             placeholder="Enter votre age "
             keyboardType='numeric'  
             onChangeText={(val)=>setname(val)} 
             style={styles.input}/>
          
      
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
  },
  input : {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200 
  }
});
