import React,{Component} from 'react';
import {View,ScrollView,StyleSheet,Button} from 'react-native';
import {  Card, Title, Paragraph } from "react-native-paper";


export default class AppliedLoan extends Component{
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
            <Card>
                <Card.Content>
                <Title>PL00003078</Title>
                <Paragraph>Loan Amount : Rs 99,99,999</Paragraph>
                <Paragraph>Tenure(In Months) : 13</Paragraph>
                </Card.Content>
                <Card.Actions>
                <Button title="View Detail"></Button>
                </Card.Actions>
            </Card>
            </View>
             <View style={styles.container}>
             <Card>
                 <Card.Content>
                 <Title>PL00003078</Title>
                 <Paragraph>Loan Amount : Rs 99,99,999</Paragraph>
                 <Paragraph>Tenure(In Months) : 13</Paragraph>
                 </Card.Content>
                 <Card.Actions>
                 <Button title="View Detail"></Button>
                 </Card.Actions>
             </Card>
             </View>
             </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      fontSize: 20,
      margin: 10,
      height: 150
    }
  });
