import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './src/navigations/MainNavigator';

import { Provider } from 'react-redux';
import store from './store/index';

export default function App() {
    return (
      <Provider store={store}>  
         <MainNavigator/>
      </Provider>
    )
}

const styles = StyleSheet.create({
  container: {
    
  },
});
