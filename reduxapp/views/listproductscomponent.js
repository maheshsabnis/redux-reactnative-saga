import { View, Text, Button,Alert, StyleSheet, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {getProducts} from './../actions/actions';
const ItemSeperatorComponent=()=>(
  <View style={styles.seperator}>
      {/* <Text></Text> */}
  </View>
);
const ListEmptyComponent=()=>(
  <View style={styles.seperator}>
      <Text>No Recods in the List</Text>
  </View>
);

const Item = ({product}) => (
    <View style={styles.item}>
      <Text style={styles.title}>Product Row Id : {product.ProductRowId}</Text>
      <Text style={styles.title}>Product Id     : {product.ProductId}</Text>
      <Text style={styles.title}>Product Name   : {product.ProductName}</Text>
      <Text style={styles.title}>Category Name  : {product.CategoryName}</Text>
      <Text style={styles.title}>Manufacturer   : {product.Manufacturer}</Text>
      <Text style={styles.title}>Description    : {product.Description}</Text>
      <Text style={styles.title}>Base Price     : {product.BasePrice}</Text>
    </View>
  );

const ListProductsComponent = ({navigation}) => {
  const [products, setProducts] = useState([]);
   // subscribe to the store
   const stateData = useSelector((state) => state.products);
   // lets dispatch the action from the root
   const dispatch = useDispatch();

   useEffect(() => {
    // call to the action
    dispatch(getProducts());
   
    // update the state for departments
    setProducts(stateData);
    // }
  },[stateData]);

  return (
    <View style={styles.container}>
      <Text>List of Products</Text>
      <FlatList
            numColumns='1'
            data={products}
            ItemSeparatorComponent={ItemSeperatorComponent}
            ListEmptyComponent={ListEmptyComponent}
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
        fontSize: 20,
      },
      seperator: {
          backgroundColor: 'red',
          width:1000,
          height:10
        }
  });

export default ListProductsComponent;