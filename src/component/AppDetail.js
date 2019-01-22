import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import MyComponent from "./bottomNav";

export default class AppDetails extends React.Component {
  static navigationOptions = {
    title: "Details"
  };
  render() {
    const value = this.props.album;
    return (
      <View>
        <Text>{value}</Text>
        {this.MyComponent()}
      </View>
    );
  }

  MyComponent = () => (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    margin: 10,
    height: 150
  }
});
