import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Grid   from './Grid';
import { StyleSheet,ScrollView} from 'react-native';


export default class Home extends React.Component {
    static navigationOptions ={
              title:'Home'
    };
   render(){
       console.log('Home ',this.props)
    return(
<ScrollView style={styles.container}>
    <Header/>
    <Banner/>
    <Grid navigation={this.props.navigation}/>
  </ScrollView>
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