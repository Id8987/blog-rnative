import React, { useState } from "react";
import { StyleSheet, Text, View,ScrollView , Button, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';

import {InputField, BottomField} from "./Input"


export default function Inscription({navigation}){

  const [email, setEmail]  = useState('')
  const [password, setPassword] = useState('')
  
    return(
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.nomBlog}>
                <Text style={{'fontSize':50,'fontWeight':'bold'}}>T D S I</Text>
                <Text style={{'fontSize':30,'fontWeight':'bold','color':'orangered'}}>Blog</Text>
            </View>
            <View style={{'marginTop':10,'flex':1,'alignItems':'center'}}>
                <View>
                  <Text style={styles.textStyle} >Nom Complet</Text>
                  <TextInput
                  style={styles.inputStyle}
                  placeholder = 'e.g. Issakha Diouf'
                /> 
              </View>
                <View>
                  <Text style={styles.textStyle} >Email</Text>
                  <TextInput
                  style={styles.inputStyle}
                  placeholder = 'e.g. abc@gmail.com'
                  value = {email}
                  onChangeText = {e => setEmail(e)}
                  /> 
                </View>
                
                <View>
                  <Text style={styles.textStyle}>Mot de passe</Text>
                  <TextInput 
                      style={styles.inputStyle}
                      secureTextEntry={true}
                      placeholder='mot de passe'
                      value={password}
                      onChangeText = {e => setPassword(e)}
                  /> 
                </View>

                <Button
                 title="s'inscrire" 
                 color='#222'
                 onPress={() =>navigation.navigate('Login')}
                />

            </View>
            <BottomField
              phrase="Vous avez deja un compte?"  
              titreBoutton="SE CONNECTER"
            />
        </View>
        </ScrollView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center'
  },
    nomBlog:{
        marginTop:0,
        alignItems:'center',
        marginBottom:0
    
      },
      textStyle:{
        fontWeight:'400',
        marginBottom:5
      },
      inputStyle:{
        width:300,
        height:40,
        borderWidth:1,
        marginBottom:20,
        borderColor:'grey',
        paddingLeft:10,
        borderRadius:7
      }

})