import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';


export default class LoanHistory extends React.Component{
    static navigationOptions ={
        title:'ApplyLoan'
    };
    render(){
        navigation=this.props.navigation;
        return(
            <View>
               <Text>Welcome to Loan Details</Text>  
            </View>
        );
    }
}
