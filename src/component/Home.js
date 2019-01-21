import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Login   from './Login';
import SignUp   from './SignUp';
import { StyleSheet,View} from 'react-native';


export default class Home extends React.Component {
   render(){
       console.log('Home ',this.props)
    return(
      <View style={styles.container}>
      <SignUp navigation={this.props.navigation}/>
            {/* <Slider/>
          <Login navigation={this.props.navigation}/> */}
        </View>
    );
   }

}





const styles = StyleSheet.create({
    container: {
      fontSize: 20,
      flex: 1,
      display:'flex',
      flexDirection:'column',
      color:'#fff',
      marginTop:10,
    },
    bigblue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 20,
    },small: {
      color: 'red',
      fontWeight: 'normal',
      fontSize: 10,
    },
    medium: {
      fontWeight: 'normal',
      fontSize: 16,
      borderRadius: 30,
      minWidth: 200,
      width:'auto',
      backgroundColor: '#68a0cf',
      overflow: 'hidden'
    }
  
  });