import React, { useState } from "react";
import { Text, View, Button,Image, StyleSheet, TextInput, ScrollView, Pressable, TouchableWithoutFeedback, Keyboard } from "react-native";




export default function AddBlog(){
    const [change, setChange ]  = useState(false)
    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <ScrollView>
        <View style={styles.container}>

            <View>
                <Image 
                    source={require('../assets/img8.jpg')}
                    style = {{'height':200}}
                />
                
                <Text style = {{'alignSelf':'center'}}>Choisir image</Text>
            </View>
            <View style = {styles.category}>
                <Text style={{'marginLeft':10,'marginBottom':10, 'fontWeight':'200'}}>Choisir la categoie</Text>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    
                    <Pressable style={styles.choiceBtnStyle}><Text style={change ? {'color':'#fff'}:{'color':'#222'}}>Sécurité</Text></Pressable>
                    <Pressable style={styles.choiceBtnStyle}><Text style={change ? {'color':'#fff'}:{'color':'#222'}}>Dev</Text></Pressable>
                    <Pressable style={styles.choiceBtnStyle}><Text style={change ? {'color':'#fff'}:{'color':'#222'}}>Systéme</Text></Pressable>
                    <Pressable style={styles.choiceBtnStyle}><Text style={change ? {'color':'#fff'}:{'color':'#222'}}>Réseau</Text></Pressable>
                    <Pressable style={styles.choiceBtnStyle}><Text style={change ? {'color':'#fff'}:{'color':'#222'}}>Tous</Text></Pressable>
                </ScrollView>
               
            </View>
            <View>
                <TextInput
                placeholder="Donner le titre du blog"
                style = {styles.inputStyle}
                />
                <Text style = {{'marginLeft':20,'marginBottom':30}}>Description</Text>
                <TextInput
                    multiline
                    style = {styles.descStyle}
                />
            </View>
            <View style={{'marginLeft':20,'marginLeft':20}}>
                <Button 
                    color='#222'
                    title = 'creer blog'
                /> 
            </View>

        </View>
        </ScrollView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
       

    },
    category:{
        marginTop:10,
      
    },
    choiceBtnStyle:{
        paddingTop:7,
        paddingBottom:5,
        paddingLeft:7,
        paddingRight:7,
        marginRight:15,
        marginLeft:15,
        borderRadius:10,
        borderWidth:.5,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
    },
    inputStyle:{
        padding:10,
        marginTop:15,
        borderWidth:0.9,
        borderRadius:7,
        fontWeight:'bold',
        marginLeft:20,
        marginRight:20,
        marginBottom:30,
    },
    descStyle:{
        marginLeft:20,
        marginRight:20,
        marginBottom:30,
        height: 150,
        padding: 5,
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 16,
    }
    
})