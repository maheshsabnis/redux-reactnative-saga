import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import MainReduxComponent from './reduxapp/mainreduxcomponent';
export default function App() {
  return (
    <Provider store={store}>
      <MainReduxComponent></MainReduxComponent>
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
