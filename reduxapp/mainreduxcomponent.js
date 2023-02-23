
import React from 'react'
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AddProductComponent from './views/addproductcomponent';
import ListProductsComponent from './views/listproductscomponent';
import { addProduct } from './actions/actions';
function MainReduxComponent() {
  let dispatch = useDispatch();
  let products = useSelector(state=>state.listProductReducer); 
  return (
     <View style={styles.container}>
        <AddProductComponent AddProduct={(product)=>dispatch(addProduct(product))}/>
        <ListProductsComponent prds={products}/>
     </View>   
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    } 
  });


export default MainReduxComponent
