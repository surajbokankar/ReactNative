
import React from 'react';
import { AppRegistry ,StyleSheet, Text, View,Image} from 'react-native';

export default class Header extends React.Component{

    render(){
        return(
        <View style={styles.header}>
           <Image
          style={styles.cart}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
           <Text style={styles.text}>Home</Text>
            </View>    );
    }
}

AppRegistry.registerComponent('Header', () => Header);


const styles=StyleSheet.create({
    header:{
        backgroundColor:'white',
        height:60,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        borderBottomWidth:4,
        borderBottomColor:'#ccc',
        shadowRadius:10

    },
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    cart:{
        height:40,
        width:40,
        alignItems:'center',
        borderRadius:10
    },
    text:{
        fontSize:16,
        marginLeft:10,
        color:'#000',
        fontStyle:'italic'
    }
    
});

