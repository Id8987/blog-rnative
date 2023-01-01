import React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Heading (){
    return(
        <View style = {styles.headingStyle}>
                <View>
                    <Text style = {styles.headTitle}>TDSI</Text>
                    <Text style={styles.blogTitle}>Blog</Text>
                </View>
                
        </View>
    )
}
function HeadingRight({navigation}){
    return(
        <View> 
            <Text >
                <TouchableOpacity>      
                    <MaterialIcons name="logout" size={24} color="black" />
                </TouchableOpacity>
            </Text> 
        </View>

    )
}

const styles = StyleSheet.create({
    homeStyle:{
        display:'flex',

    },
    headingStyle:{
        display:'flex',
        flexDirection:'row',
        paddingBottom:5, 
        width:'100%',
       
    },
    headTitle:{
        fontSize:20,
        fontWeight:'600'
    },
    blogTitle:{
        fontSize:16,
        color:'orangered'
    }
})
export {HeadingRight}