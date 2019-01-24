import React,{Component} from 'react';
import {View,ScrollView,StyleSheet,Button,Text} from 'react-native';
import {  Card, Title, Paragraph } from "react-native-paper";
import { TextField } from 'react-native-material-textfield';
import Panel from './Panel';

export default class ApplyLoan extends Component{
    static navigationOptions ={
        title:'Apply Loan',
        headerStyle: {
        backgroundColor: "#03A9F4"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
    render(){
        navigation=this.props.navigation;
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Panel title="Applicant Details">
                            <View>
                                <TextField style = {styles.input}
                                    underlineColorAndroid = "transparent"
                                    label = "Name"
                                    placeholderTextColor = "#0b395b"
                                    autoCapitalize = "none"
                                    onChangeText = {this.handleEmail}/>
                            </View>
                            <View>
                                <TextField style = {styles.input}
                                    underlineColorAndroid = "transparent"
                                    label = "Email"
                                    placeholderTextColor = "#0b395b"
                                    autoCapitalize = "none"
                                    onChangeText = {this.handleEmail}/>
                            </View>
                            <View>
                                <TextField style = {styles.input}
                                    underlineColorAndroid = "transparent"
                                    label = "DOB"
                                    placeholderTextColor = "#0b395b"
                                    autoCapitalize = "none"
                                    onChangeText = {this.handleEmail}/>
                            </View>
                
                         </Panel>
                         <Panel title="Loan Details">
                            <View>
                                <TextField style = {styles.input}
                                    underlineColorAndroid = "transparent"
                                    label = "Name"
                                    placeholderTextColor = "#0b395b"
                                    autoCapitalize = "none"
                                    onChangeText = {this.handleEmail}/>
                            </View>
                            <View>
                                <TextField style = {styles.input}
                                    underlineColorAndroid = "transparent"
                                    label = "Email"
                                    placeholderTextColor = "#0b395b"
                                    autoCapitalize = "none"
                                    onChangeText = {this.handleEmail}/>
                            </View>
                            <View>
                                <TextField style = {styles.input}
                                    underlineColorAndroid = "transparent"
                                    label = "DOB"
                                    placeholderTextColor = "#0b395b"
                                    autoCapitalize = "none"
                                    onChangeText = {this.handleEmail}/>
                            </View>
                
                         </Panel>
                         <Panel title="Basic Details">
                            <View>
                                <TextField style = {styles.input}
                                    underlineColorAndroid = "transparent"
                                    label = "Name"
                                    placeholderTextColor = "#0b395b"
                                    autoCapitalize = "none"
                                    onChangeText = {this.handleEmail}/>
                            </View>
                            <View>
                                <TextField style = {styles.input}
                                    underlineColorAndroid = "transparent"
                                    label = "Email"
                                    placeholderTextColor = "#0b395b"
                                    autoCapitalize = "none"
                                    onChangeText = {this.handleEmail}/>
                            </View>
                            <View>
                                <TextField style = {styles.input}
                                    underlineColorAndroid = "transparent"
                                    label = "DOB"
                                    placeholderTextColor = "#0b395b"
                                    autoCapitalize = "none"
                                    onChangeText = {this.handleEmail}/>
                            </View>
                
                         </Panel>
                         <Panel title="Employment  Details">
                            <View>
                                <TextField style = {styles.input}
                                    underlineColorAndroid = "transparent"
                                    label = "Name"
                                    placeholderTextColor = "#0b395b"
                                    autoCapitalize = "none"
                                    onChangeText = {this.handleEmail}/>
                            </View>
                            <View>
                                <TextField style = {styles.input}
                                    underlineColorAndroid = "transparent"
                                    label = "Email"
                                    placeholderTextColor = "#0b395b"
                                    autoCapitalize = "none"
                                    onChangeText = {this.handleEmail}/>
                            </View>
                            <View>
                                <TextField style = {styles.input}
                                    underlineColorAndroid = "transparent"
                                    label = "DOB"
                                    placeholderTextColor = "#0b395b"
                                    autoCapitalize = "none"
                                    onChangeText = {this.handleEmail}/>
                            </View>
                
                         </Panel>

                         <Panel title="Bank Details">
                            <View>
                                <TextField style = {styles.input}
                                    underlineColorAndroid = "transparent"
                                    label = "Name"
                                    placeholderTextColor = "#0b395b"
                                    autoCapitalize = "none"
                                    onChangeText = {this.handleEmail}/>
                            </View>
                            <View>
                                <TextField style = {styles.input}
                                    underlineColorAndroid = "transparent"
                                    label = "Email"
                                    placeholderTextColor = "#0b395b"
                                    autoCapitalize = "none"
                                    onChangeText = {this.handleEmail}/>
                            </View>
                            <View>
                                <TextField style = {styles.input}
                                    underlineColorAndroid = "transparent"
                                    label = "DOB"
                                    placeholderTextColor = "#0b395b"
                                    autoCapitalize = "none"
                                    onChangeText = {this.handleEmail}/>
                            </View>
                
                         </Panel>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        marginTop: 10,
        marginBottom:10,
        marginRight: 10,
        marginLeft:10,
    },
  });