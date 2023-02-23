import { View, Text, Button,Alert, StyleSheet, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import {useSelector} from 'react-redux';

const Item = ({product}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{product.product.ProductId}</Text>
      <Text style={styles.title}>{product.product.ProductName}</Text>
    </View>
  );

const ListProductsComponent = ({navigation}) => {
  let products = useSelector(state=>state.listProductReducer);
 // Alert.alert(`The List ${JSON.stringify(products)}`);
  return (
    <View style={styles.container}>
      <Text>List of Products</Text>
      <FlatList
            numColumns='2'
            data={products}
            renderItem={({item}) => <Item product={item} />}
            keyExtractor={item => item.ProductId}
      />
      <Button title='Go To Add Products'
       onPress={()=>navigation.navigate('AddProduct')}></Button>  
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      }
  });

export default ListProductsComponent;