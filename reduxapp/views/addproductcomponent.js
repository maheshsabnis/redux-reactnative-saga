import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { Alert,Button, Text, View, Image, StyleSheet,TextInput } from 'react-native';
import {useDispatch} from 'react-redux';
import { addProduct } from '../actions/actions';  
 
const AddProductComponent = (props) => {
    const [product, setProduct] = useState({ProductId:0,ProductName:''});
    const dispatch = useDispatch();
    const addNewProduct=()=>{
      //Alert.alert(JSON.stringify(`Add = ${JSON.stringify(product)}`));
       //dispatch((product)=>addProduct(product));
       props.AddProduct(product);
       setProduct({ProductId:0,ProductName:''});
    };

    return (
         <View style={styles.container}>
            <Text style={styles.text}>Product Id</Text>
            <TextInput style={styles.textInput}
              value={product.ProductId}
              onChangeText={(text)=>setProduct({...product, ProductId:text})}/>  
            <Text style={styles.text}>Product Name</Text>
            <TextInput style={styles.textInput}
              value={product.ProductName}
              onChangeText={(text)=>setProduct({...product, ProductName:text})}
              />
            <Button
              title='Add Product'
              style={styles.button}
              onPress={addNewProduct}
            />    
         </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
      height:30,
      width:80,
      backgroundColor:'red',
      color:'yellow'
    },
    text:{
      height:50,
      width:100,
      fontSize:15,
      fontWeight:'bold' 
    },
    textInput:{
      height:50,
      width:200,
      borderWidth:3
    }
  });
  

export default AddProductComponent;