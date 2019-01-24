import React,{Component} from 'react';
import {View,ScrollView,StyleSheet,Button,SectionList} from 'react-native';
import {  Card, Title, Paragraph } from "react-native-paper";
import { TextField } from 'react-native-material-textfield';

export default class Refferal extends Component{
    state = {
        email: ''
     }
     handleEmail = (text) => {
        this.setState({ email: text })
     }
     invite = (email) => {
        alert("Email send to: " + email)
     }
     share = () => {
         alert("scsh")
     }
    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Card>
                        <Card.Content>
                            <Title>Refer A Friend</Title>
                            <View>
                                <TextField style = {styles.input}
                                    underlineColorAndroid = "transparent"
                                    label = "Email"
                                    placeholderTextColor = "#0b395b"
                                    autoCapitalize = "none"
                                    onChangeText = {this.handleEmail}/>
                            </View>
                        </Card.Content>
                        <Card.Actions>
                            <Button 
                            onPress = {() => this.invite(this.state.email)}
                            title="Invite"></Button>
                        </Card.Actions>
                    </Card>
                </View>
                <View style={styles.container} >
                    <Card>
                        <Card.Content>
                            <Title>Refer A Friend</Title>
                                <View>
                                    <TextField style = {styles.input}
                                        underlineColorAndroid = "transparent"
                                        label = "xgsgdyguguygu"
                                        placeholderTextColor = "#0b395b"
                                        autoCapitalize = "none"
                                        />
                                </View>
                            </Card.Content>
                        <Card.Actions>
                            <Button 
                            onPress = { () => this.share()}
                            title="Copy & Share"></Button>
                        </Card.Actions>
                    </Card>
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