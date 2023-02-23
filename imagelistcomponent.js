import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { Button, Text, View, Image, StyleSheet,ScrollView } from 'react-native';
import {imageSource} from './datasource';
const ImageListComponent = () => {
    const [imageListData, setRecords] = useState(imageSource);
    return (
        <ScrollView style={styles.scrollView}>
           {
             imageListData.map((record,index)=> (
              <View key={index}>
               <Text >{record.name}</Text>
               <Image source={record.source}
                    style={styles.img}/>
              <Text >{record.price}</Text>
              <Button title='Add To Cart'
                style={styles.button}/>  
               </View>)
             )
           }  
        </ScrollView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView:{
      height:600
    },
     img: {
      width: 100,
      height: 100,
    },
    button:{
      height:30,
      width:80,
      backgroundColor:'red',
      color:'yellow'
    }
  });
  

export default ImageListComponent;