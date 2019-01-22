import React from 'react';
import { StyleSheet, Text, View ,Button,Alert,ScrollView} from 'react-native';
import AppNavigator from './src/component/AppNavigator';
import Drawer from './src/component/drawer';


export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}



