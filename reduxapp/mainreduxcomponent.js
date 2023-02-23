
import React from 'react'
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AddProductComponent from './views/addproductcomponent';
import ListProductsComponent from './views/listproductscomponent';
import { addProduct } from './actions/actions';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
function MainReduxComponent() {
  let dispatch = useDispatch();
  let products = useSelector(state=>state.listProductReducer); 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ProductList'>
          <Stack.Screen name='ProductList' component={ListProductsComponent}/>
          <Stack.Screen name='AddProduct' component={AddProductComponent}/>
      </Stack.Navigator>
    </NavigationContainer>
    //  <View style={styles.container}>
    //     <AddProductComponent AddProduct={(product)=>dispatch(addProduct(product))}/>
    //     <ListProductsComponent prds={products}/>
    //  </View>   
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
