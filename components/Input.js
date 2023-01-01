import React from "react";
import { StyleSheet, Text, View, Button,TextInput, Pressable } from 'react-native';


const InputField = ({titreInput, placeholderInput, inputValue, inputFunction}) => {
    return (
        <View>
            <Text style={styles.textStyle} >{titreInput}</Text>
            <TextInput
            style={styles.inputStyle}
            placeholder = {placeholderInput}
            value = {inputValue}
            onChangeText = {e => inputFunction(e)}
            /> 
        </View>
    )
}

const Not2PasseFIeld = (props) =>{
    return(
        <View>
            <Text style={styles.textStyle}>Mot de passe</Text>
            <TextInput 
                style={styles.inputStyle}
                secureTextEntry={true}
                placeholder='mot de passe'
                value={props.motDePasse}
                onChangeText = {e => props.inputedMdp(e)}
            /> 
        </View>
    )
}

const BottomField = ({phrase, titreBoutton, handleClick}) => {
    return(
        
        <View style={styles.bottomStyle}>
            <Text>{phrase}</Text>
            <Pressable style={styles.btn2Style} onPress = {handleClick}>
                <Text>{titreBoutton}</Text>
            </Pressable>
        </View>
        
    )
}

const styles = StyleSheet.create({
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
      }
})

export {InputField, Not2PasseFIeld, BottomField}