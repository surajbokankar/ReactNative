import React from "react";
import { AppRegistry, StyleSheet, Text, View, Image } from "react-native";

export default class BannerTile extends React.Component {
  render() {
    return (
      <View style={Banner.container}>
        <Image
        style={Banner.bannerStyle}
          source={{
            uri:
              'https://i.ibb.co/rk6cfFq/Banner.jpg'
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("BannerTile", () => BannerTile);

const Banner = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },bannerStyle:{
    height:300,
        alignItems:'center'
    }
});
