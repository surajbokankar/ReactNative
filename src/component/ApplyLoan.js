import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';


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
            <View>
               <Text>Welcome to ApplyLoan</Text>  
            </View>
        );
    }
}
