import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { Button, Text, View, Image, StyleSheet,ScrollView } from 'react-native';
import {imageSource} from './datasource';
import {Provider} from 'react-redux';
import store from './store';
 import { addProduct } from './reduxapp/actions/actions';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainReduxComponent from './reduxapp/mainreduxcomponent';
 const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
     {/* <View style={styles.container}> 
      <Text style={styles.text}>The Application</Text> */}
      <MainReduxComponent></MainReduxComponent>
       {/* <NavigationContainer>
      <Stack.Navigator initialRouteName='ProductList'>
          <Stack.Screen name='ProductList' component={ProductListComponent}/>
          <Stack.Screen name='AddProduct' component={AddProductComponent}/>
      </Stack.Navigator>
    </NavigationContainer>  */}
    {/* </View> */}
    </Provider>
    
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
  },
  text:{
    height:50,
    width:100,
    fontSize:15,
    fontWeight:'bold' 
  },
});
