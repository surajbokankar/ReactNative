import React from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    buttonCircle: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(0, 0, 0, .2)',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    
  });
  const slides = [
    {
      key: 'somethun',
      title: 'Title 1',
      text: 'Description.\nSay something CCFDcool',
      image: require('./assets/1.png'),
      imageStyle: styles.image,
      // backgroundColor: '#59b2ab',
    },
    {
      key: 'somethun-dosss',
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('./assets/2.png'),
      imageStyle: styles.image,
      // backgroundColor: '#febe29',
    },
    {
      key: 'somethun1',
      title: 'Rocket guyyy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      image: require('./assets/3.png'),
      imageStyle: styles.image,
      // backgroundColor: '#22bcb5',
    }
  ];

export default class Slider extends React.Component {

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }

    _renderNextButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Ionicons
              name="md-arrow-round-forward"
              color="rgba(255, 255, 255, .9)"
              size={24}
              style={{ backgroundColor: 'transparent' }}
            />
          </View>
        );
      }
      _renderDoneButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Ionicons
              name="md-checkmark"
              color="rgba(255, 255, 255, .9)"
              size={24}
              style={{ backgroundColor: 'transparent' }}
            />
          </View>
        );
      }
      render() {
        navigation=this.props.navigation;
        return (
          <AppIntroSlider
            slides={slides}
            renderDoneButton={this._renderDoneButton}
            renderNextButton={this._renderNextButton}
          />
        );
      }
    
}