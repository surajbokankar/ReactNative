import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';


export default class Dashboard extends React.Component{
    static navigationOptions ={
        title:'Dashboard'
    };
    render(){
        navigation=this.props.navigation;
        return(
            <View>
               <Text>Welcome to Dashboard</Text>  
            </View>
        );
    }
}
