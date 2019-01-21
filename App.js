import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View ,Button,Alert,ScrollView} from 'react-native';
//import './src/home.css';
import Header from './src/component/Header';
import Banner from './src/component/Banner';
import Grid   from './src/component/Grid';
import AppNavigator from './src/component/AppNavigator';
import Drawer from './src/component/drawer';

//import ChatScreen from './AppDetail';
//import HomeScreen from './Home';



export default class App extends React.Component {

  _onPressButton() {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', color:'blue', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
   // Alert.alert('You tapped the button!')
  }

  render() {
    return (
  //     <View style={styles.container}>
  //       <Text style={styles.bigblue}>Working on your app!!!</Text>
  //       <Text style={styles.small}>Working!!!</Text>
  //       <Button style={styles.medium} title="Click Me"
  //       onPress={this._onPressButton}
  //       color="#841584"
  // accessibilityLabel="Learn more about this purple button"
  // disabled={false}
  // width='100'
  //       />
  //     </View>

  // <ScrollView style={styles.container}>
     
  //   <Header/>
  //   <Banner/>
  //   <Grid/>
  // </ScrollView>
   <AppNavigator/>
  //<Drawer/>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    flex: 1,
    display:'flex',
    flexDirection:'column',
    color:'#fff',
    marginTop:10,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },small: {
    color: 'red',
    fontWeight: 'normal',
    fontSize: 10,
  },
  medium: {
    fontWeight: 'normal',
    fontSize: 16,
    borderRadius: 30,
    minWidth: 200,
    width:'auto',
    backgroundColor: '#68a0cf',
    overflow: 'hidden'
  }

});


