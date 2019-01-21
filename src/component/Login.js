import React,{Component} from "react";
import {View, Text, TouchableOpacity,TouchableHighlight, TextInput, StyleSheet } from "react-native";
export default class Login extends Component {
  static navigationOptions = {
    title: "Welcome"
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
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#0b395b"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
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
            <TouchableHighlight
              onPress={() => navigation.navigate('SignUp')}
              style={styles.button}>
              <Text
                style={styles.buttonText}>Register Now</Text>
            </TouchableHighlight>
         </View>
      
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex:1
    },
    input: {
       margin: 15,
       height: 40,
       width:100,
       borderColor: '#0b395b',
       borderWidth: 1
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