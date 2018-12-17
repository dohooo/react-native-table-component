import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    const routes = [
      'ExampleOne', 
      'ExampleTwo', 
      'ExampleThree', 
      'ExampleFour', 
      'ExampleFive',
      'ExampleSix'
    ];
    return (
      <View style={styles.container}>
        {
          routes.map((route, index) => (
            <TouchableOpacity key={index} style={styles.button} onPress={() => this.props.navigation.navigate(route)}>
              <Text style={styles.text}>Go to {route}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    width: 280,
    height: 42,
    backgroundColor: '#abd0ce',
    borderRadius: 4,
    justifyContent: 'center',
    paddingLeft: 16,
    marginBottom: 16
  },
  text: {
    color: '#fff',
    fontWeight: '100',
    fontSize: 16
  }
});
