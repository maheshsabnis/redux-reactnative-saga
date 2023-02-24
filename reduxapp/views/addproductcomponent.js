import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { Alert,Button, Text, View, Image, StyleSheet,TextInput } from 'react-native';
import {useDispatch} from 'react-redux';
import { addProduct } from '../actions/actions';  
 
const AddProductComponent = ({navigation}) => {
    const [product, setProduct] = useState({
      ProductRowId: 0,
      ProductId: "",
      ProductName: "",
      CategoryName: "",
      Manufacturer: "",
      Description: "",
      BasePrice: 0
      });
    const dispatch = useDispatch();
    const addNewProduct=()=>{
      dispatch(addProduct(product));
       setProduct({
        ProductRowId: 0,
        ProductId: "",
        ProductName: "",
        CategoryName: "",
        Manufacturer: "",
        Description: "",
        BasePrice: 0
        });
       navigation.navigate('ProductList');
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
            <Text style={styles.text}>Category Name</Text>
            <TextInput style={styles.textInput}
              value={product.CategoryName}
              onChangeText={(text)=>setProduct({...product, CategoryName:text})}
              />
            <Text style={styles.text}>Manufacturer Name</Text>
            <TextInput style={styles.textInput}
              value={product.Manufacturer}
              onChangeText={(text)=>setProduct({...product, Manufacturer:text})}
              />
            <Text style={styles.text}>Description</Text>
            <TextInput style={styles.textInput}
              value={product.Description}
              onChangeText={(text)=>setProduct({...product, Description:text})}
              />
            <Text style={styles.text}>Base Price</Text>
            <TextInput style={styles.textInput}
              value={product.BasePrice}
              onChangeText={(text)=>setProduct({...product, BasePrice:text})}
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