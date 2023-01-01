import React, { useState } from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity,FlatList, Image,ScrollView, Pressable } from "react-native";
import { Entypo } from '@expo/vector-icons';
//icon plus
import { AntDesign } from '@expo/vector-icons';


export default function Home({navigation}){
    
    const [blogs, setBlogs] = useState([
        {titre:"Cycle de vie d'une application",              date:"24 Juin 2022",      category:"Dev",      image:require('../assets/img1.jpg')},
        {titre:"Remote Job (Setup pour reussir)",             date:"26 Juin 2022",      category:"Dev",      image:require('../assets/img2.jpg')},
        {titre:"Devenir Admin Reseau",                        date:"30 Octobre 2022",   category:"Reseau",   image:require('../assets/img3.jpg')},
        {titre:"chatGPT.Quel est l'avenir du DevWEb",         date: "31 Decembre 2022",   category:"Dev",      image:require('../assets/img9.jpg')},
        {titre:"Automatisation du pentesting",                date:"30 Octobre 2022",  category:"securite", image:require('../assets/img5.jpg')},
        {titre:"Connaisez-vous vraiment linux",               date:"1 janvier 2023",    category:"systeme",  image:require('../assets/img6.jpg')},
        {titre:"TDSI: Systemes embarquees, une formation...", date:"2 Janvier 2022",    category:"autres",   image:require('../assets/img7.jpg')},
    ])

    //copy blog
    const blogCopy = [
        {titre:"Cycle de vie d'une application",              date:"24 Juin 2022",      category:"Dev",      image:require('../assets/img1.jpg')},
        {titre:"Remote Job (Setup pour reussir)",             date:"26 Juin 2022",      category:"Dev",      image:require('../assets/img2.jpg')},
        {titre:"Devenir Admin Reseau",                        date:"30 Octobre 2022",   category:"Reseau",   image:require('../assets/img3.jpg')},
        {titre:"chatGPT.Quel est l'avenir du DevWEb",         date: "31 Decembre 2022",   category:"Dev",      image:require('../assets/img9.jpg')},
        {titre:"Automatisation du pentesting",                date:"30 Octobre 2022",  category:"securite", image:require('../assets/img5.jpg')},
        {titre:"Connaisez-vous vraiment linux",               date:"1 janvier 2023",    category:"systeme",  image:require('../assets/img6.jpg')},
        {titre:"TDSI: Systemes embarquees, une formation...", date:"2 Janvier 2022",    category:"autres",   image:require('../assets/img7.jpg')},
    ]
    // fonction gerant le deplacement 
    const pressHandler = () =>{
        navigation.navigate('BlogDetails')
    }

    const filterBlog = (category)=>{   
        return blogs.filter(item => {
            return item.category == category 
        }) 
    }

    const handleBlog = (category)=>{
        setBlogs(filterBlog(category)) 
    }

    return(
        <ScrollView>
        <View style={styles.homeStyle}>
            <View style={styles.choicesStyle}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    <Pressable style={styles.choiceBtnStyle} onPress={()=>{setBlogs(blogCopy)}}><Text>Tous</Text></Pressable>
                    <Pressable style={styles.choiceBtnStyle}><Text>Sécurité</Text></Pressable>
                    <Pressable style={styles.choiceBtnStyle} onPress={()=>{handleBlog('Dev')}}><Text>Dev</Text></Pressable>
                    <Pressable style={styles.choiceBtnStyle} onPress={()=>{handleBlog('systeme')}}><Text>Systéme</Text></Pressable>
                    <Pressable style={styles.choiceBtnStyle}><Text>Réseau</Text></Pressable>
                </ScrollView>
            </View>

            <View style={styles.blogContainer}>
                {blogs.map((item, id)=>{
                    return(
                    <View key={id} style={{'marginBottom':15}}>
                        <TouchableOpacity  onPress={() => navigation.navigate('BlogDetails', item)}>
                        <Image source={item.image} style = {styles.blogImage} />
                        <View style={styles.infoStyle}>
                            <Text style={{'fontWeight':'700'}}>{item.titre}</Text>
                            <Text style={{'fontWeight':'500'}}>{item.date}</Text>
                            <View style={{'flex':1,'flexDirection':'row'}}>
                                <Entypo name="dot-single" size={24} color="orangered" />
                                <Text style={{'fontWeight':'500'}}>{item.category}</Text>
                            </View>
                            
                        </View>
                        </TouchableOpacity>
                    </View>
                    )
                })}
            
            </View>

            <View style={{'position':'relative'}}>
                <TouchableOpacity onPress={() => navigation.navigate('AddBlog')}>
                    <View style={styles.addButton}>
                        <AntDesign name="pluscircle" size={50} color="orangered" />
                    </View>
                </TouchableOpacity>
            </View>
           
        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    homeStyle:{
        flex:1,
        backgroundColor:'#fff'
    },

    blogContainer:{
        flex:1,
        marginLeft:10,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        
        
    },
    headingStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
       
        width:'100%',
       
    },
    headTitle:{
        fontSize:25,
        fontWeight:'600'
    },
    blogTitle:{
        fontSize:20,
        color:'orangered'
    }, 
    blogImage:{
        height:200,
        width:150,
        borderRadius:15
    },
    infoStyle:{
        width:150
    },
    choicesStyle:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        paddingTop:10,
        paddingBottom:30
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
        alignItems:'center'


    },
    addButton:{
        position:'absolute',
        right:20,
        bottom:20,
       
    }
})