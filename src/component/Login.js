import React,{Component} from "react";
import {View, Text, TouchableOpacity,TouchableHighlight, Button, StyleSheet } from "react-native";
import { TextField } from 'react-native-material-textfield';
// import Button from 'material-ui';
export default class Login extends Component {
  navigation = null;
  static navigationOptions = {
    title: "Login"
  }
    state = {
        email: '',
        password: ''
     }
     handleEmail = (text) => {
        this.setState({ email: text })
     }
     handlePassword = (text) => {
        this.setState({ password: text })
     }
     login = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass)
     }
    render() {
      navigation=this.props.navigation;
      return (
        <View style = {styles.container}>
            <TextField style = {styles.input}
               underlineColorAndroid = "transparent"
               label = "Email"
               placeholderTextColor = "#0b395b"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            <TextField style = {styles.input}
               underlineColorAndroid = "transparent"
               label ="Password"
               accessibilityLabel = "Password"
               placeholderTextColor = "#0b395b"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>        
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
            <Button onPress={() => navigation.navigate('SignUp')} title="Register Now">
            </Button>
         </View>
      
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex:1,
      marginLeft: 15,
      marginRight:15
   },
   input: {
      marginLeft: 15,
      marginRight:15

   },
    submitButton: {
       backgroundColor: '#00b0af',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })