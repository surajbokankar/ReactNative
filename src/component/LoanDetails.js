import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';


export default class LoanDetails extends Component{
    static navigationOptions ={
        title:'Loan Details',
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
            <View>
               <Text>LoanDetails Page</Text>  
            </View>
        );
    }
}
