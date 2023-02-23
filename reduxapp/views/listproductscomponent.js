import { View, Text, Button,Alert, StyleSheet, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import {useSelector} from 'react-redux';

const Item = ({product}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{product.product.ProductId}</Text>
      <Text style={styles.title}>{product.product.ProductName}</Text>
    </View>
  );

const ListProductsComponent = ({prds}) => {
  const [products, setProducts] = useState([]); 
  //Alert.alert(`The Initial State ${JSON.stringify(prds)}`);
//   useEffect(()=>{
//     setProducts(prds);
//     Alert.alert(`The Received State ${JSON.stringify(prds)}`);
//   },[]);
 
  return (
    <View style={styles.container}>
      <Text>List of Products</Text>
      <FlatList
            numColumns='2'
            data={prds}
            renderItem={({item}) => <Item product={item} />}
            keyExtractor={item => item.ProductId}
      />
      <Button title='Go To Add Products'></Button>  
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