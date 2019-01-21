import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';


export default class AppDetails extends React.Component{
    static navigationOptions ={
        title:'Details'
    };
    render(){
        navigation=this.props.navigation;
        return(

            <View>
             
             <Text>AppDetails</Text>
             <TouchableOpacity
                    title="Go to Login"
                    onPress={() => navigation.navigate('Login')}
                    >
                <Text>LOG</Text>
                </TouchableOpacity>
                <TouchableOpacity
                   title="Go to SignUp"
                   onPress={() => navigation.navigate('SignUp')}
                   >
               <Text>SignUp</Text>
               </TouchableOpacity>
                
            </View>
        );
    }
}
