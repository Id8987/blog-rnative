import React from "react";
import { View, StyleSheet,Text,ImageBackground, ScrollView } from "react-native";




export default function BlogDetails({route, navigation}){
    const {titre, image, date, category}  = route.params
    return(
        <View style={styles.DetailsblogStyle}>
            <ScrollView>
            <View >
                <View style = {{'marginBottom':20}}>
                    
                    <ImageBackground source = {image} imageStyle={{'borderRadius':12,}} style={{'height':250,'width':'100%',}}>
                        <View style={styles.textInImage}>
                            <Text style={styles.titleStyle}>{titre}</Text>
                            <View style={{'display':'flex','flexDirection':'row'}}>
                                <Text style={styles.textStyle}>{date}</Text>
                                <Text style={styles.textStyle}>{category}</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>
            <View>
                <Text> 
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry Lorem Ipsum has been the industry’s standard dummy 
                text ever since the 1500s, when an unknown printer took a galley 
                of type and scrambled it to make a type specimen book. It has 
                survived not only five centuries, but also the leap into electronic 
                typesetting, remaining essentially unchanged. It was popularised 
                in the 1960s with the release of Letraset sheets containing Lorem 
                Ipsum passages, and more recently with desktop publishing 
                software like Aldus PageMaker including versions of Lorem 
                Ipsum.
                
                orem Ipsum is simply dummy text of the printing and typesetting 
                industry Lorem Ipsum has been the industry’s standard dummy 
                text ever since the 1500s, when an unknown printer took a galley 
                of type and scrambled it to make a type specimen book. It has 
                survived not only five centuries, but also the leap into electronic 
                typesetting, remaining essentially unchanged. It was popularised 
                in the 1960s with the release of Letraset sheets containing Lorem 
                Ipsum passages, and more recently with desktop publishing 
                software like Aldus PageMaker including versions of Lorem 
                Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry Lorem Ipsum has been the industry’s standard dummy 
                text ever since the 1500s, when an unknown printer took a galley 
                of type and scrambled it to make a type specimen book. It has 
                survived not only five centuries, but also the leap into electronic 
                typesetting, remaining essentially unchanged. It was popularised 
                in the 1960s with the release of Letraset sheets containing Lorem 
                Ipsum passages, and more recently with desktop publishing 
                software like Aldus PageMaker including versions of Lorem 
                Ipsum.
                
                orem Ipsum is simply dummy text of the printing and typesetting 
                industry Lorem Ipsum has been the industry’s standard dummy 
                text ever since the 1500s, when an unknown printer took a galley 
                of type and scrambled it to make a type specimen book. It has 
                survived not only five centuries, but also the leap into electronic 
                typesetting, remaining essentially unchanged. It was popularised 
                in the 1960s with the release of Letraset sheets containing Lorem 
                Ipsum passages, and more recently with desktop publishing 
                software like Aldus PageMaker including versions of Lorem 
                Ipsum.
                </Text>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    DetailsblogStyle:{
        display:'flex',
        height:'100%',
        backgroundColor:'#fff', 
        marginLeft:10,
        marginRight:10   
    }
    ,
    textStyle:{
        color:'#fff',
        marginRight:15
    },
    titleStyle:{
        color:'#fff',
        fontSize:25
    },
    textInImage:{
        height:'100%',
        display:'flex',
        justifyContent:'flex-end',
        paddingBottom:12,
        paddingLeft:12
    }
})