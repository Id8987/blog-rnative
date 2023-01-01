import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Login from './components/Login';
import Inscription from './components/Inscription';
import BlogDetails from './components/blogDetails';

import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Heading, { HeadingRight } from './components/heading';
import AddBlog from './components/addBlog';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    
  
    <NavigationContainer>
     
      <Stack.Navigator initialRouteName = "Login" options = {{headerShown:false}}>
        <Stack.Screen name = "Home" component = {Home} options={{
          headerTitle:() => <Heading />,
          headerRight:() => <HeadingRight />,
         

        }}/>
        <Stack.Screen name = "Login" component = {Login}/>
        <Stack.Screen name = "Inscription" component = {Inscription} options = {{title:'S\'inscrire'}}/>
        <Stack.Screen name = "BlogDetails" component = {BlogDetails} options ={{title:'Lecture'}}/>
        <Stack.Screen name = "AddBlog" component = {AddBlog} options={{ 
          headerShown:false
        }}/>
        <Stack.Screen name = "HeadingRight" component = {HeadingRight}/>
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  
});
