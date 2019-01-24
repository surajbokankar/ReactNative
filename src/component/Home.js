import React from 'react';
import Login   from './Login';
import { StyleSheet,View,Button,Alert} from 'react-native';

import { Permissions, Contacts } from 'expo';
export default class Home extends React.Component {
  static navigationOptions = {
    title: "Login",
    headerStyle: {
      backgroundColor: "#0b395b"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }
  async showFirstContactAsync() {
    // Ask for permission to query contacts.
    const permission = await Permissions.askAsync(Permissions.CONTACTS);
    
    if (permission.status !== 'granted') {
      // Permission was denied...
      return;
    }
    const contacts = await Contacts.getContactsAsync({
      fields: [
        Contacts.PHONE_NUMBERS,
        Contacts.EMAILS,
      ],
      pageSize: 10,
      pageOffset: 0,
    });
    if (contacts.total > 0) {
      Alert.alert(
        'Your first contact is...',
        `Name: ${contacts.data[0].name}\n` +
        `Phone numbers: ${contacts.data[0].phoneNumbers[0].number}\n` +
        `Emails: ${contacts.data[0].emails[0].email}`
      );
    }
  }
   render(){
       console.log('Home ',this.props)
    return(
      <View style={styles.container}>
       {/* <SignUp navigation={this.props.navigation}/> */} 
              {/* <AppDetails navigation={this.props.navigation}/>  */}
           <Login navigation={this.props.navigation}/>  
           <Button title='Get contacts' onPress={this.showFirstContactAsync} />
        </View>
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