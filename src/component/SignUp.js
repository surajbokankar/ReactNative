import React,{Component} from "react";
import {View, Text, TouchableOpacity,TouchableHighlight, TextInput,Button, StyleSheet } from "react-native";
import { TextField } from 'react-native-material-textfield';
import DateTimePicker from 'react-native-modal-datetime-picker';


export default class SignUp extends Component {
    navigation=null;
    static navigationOptions = {
      title: "Sign Up",
      headerStyle: {
        backgroundColor: "#0b395b"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
    state = {
        email: '',
        password: '',
        isDateTimePickerVisible: false,
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
     _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

     _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
   
     _handleDatePicked = (date) => {
       alert('A date has been picked: ', date);
       this._hideDateTimePicker();
     };
    render() {
        navigation=this.props.navigation;
      return (
        <View style = {styles.container}>
            <TextField style = {styles.input}
               underlineColorAndroid = "transparent"
               label = "PAN Number"
               placeholderTextColor = "#0b395b"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TouchableOpacity 
            style = {styles.input}
            onPress={this._showDateTimePicker}>
                <Text>Date of Birth</Text>
                </TouchableOpacity>
                <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimePicker}
                />
            
            <TouchableOpacity>
               <Button 
               onPress = {() => this.login(this.state.email, this.state.password)} 
               title="Submit"
               buttonStyle={{
                backgroundColor: "rgba(92, 99,216, 1)",
                width: 300,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
               />
            </TouchableOpacity>
            
            <Button title='Dashboard' 
            onPress={() => navigation.navigate('Bottom')} />

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