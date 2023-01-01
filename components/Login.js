import React from "react";
import { StyleSheet, Text, View, Button, Pressable, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {InputField, Not2PasseFIeld, BottomField} from "./Input"


export default function Login({navigation}){
    function handleClick(){
        navigation.navigate('Inscription')
    }
    return(
      <TouchableWithoutFeedback  onPress={() => {
        Keyboard.dismiss()
      }}>
        <View style = {styles.Container}>

          
             
            <View style={styles.nomBlog}>
                <Text style={{'fontSize':50,'fontWeight':'bold'}}>T D S I</Text>
                <Text style={{'fontSize':30,'fontWeight':'bold','color':'orangered'}}>Blog</Text>
            </View>

            <View style={{'marginBottom':70,'alignItems':'center'}}>
              <View>
                  <Text style={styles.textStyle} >Email</Text>
                  <TextInput
                  style={styles.inputStyle}
                  placeholder = "e.g. abc@gmail.com"
                  /> 
             </View>
             <View>
                  <Text style={styles.textStyle} >Mot de passe</Text>
                  <TextInput
                  secureTextEntry={true}
                  style={styles.inputStyle}
                  placeholder = "mot de passe"
                  /> 
             </View>
                

                

                <Button
                 title="se connecter" 
                 color='#222'
                 onPress={()=> navigation.navigate('Home')}
                />
                
            </View>
            <View style={styles.bottomStyle}>
                <Text>Vous n'avez pas de compte? </Text>
                <Pressable style={styles.btn2Style} onPress = {()=>navigation.navigate('Inscription')}>
                    <Text>S'INSCRIRE</Text>
                </Pressable>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    nomBlog:{
        marginTop:0,
        alignItems:'center',
        marginBottom:30
      },
      Container:{
        flex:1,
        backgroundColor:'#fff'
      },
      btn2Style: {
        color: 'white',
        backgroundColor:'#fff',
        width:300,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        fontWeight:'bold',
        borderWidth:0.7,
        borderColor:'grey',
        marginTop:10,
        marginBottom:10
      },
      
      bottomStyle:{
        display:"flex",
        alignItems:'center',
        marginBottom:30
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
      },

})