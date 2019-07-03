import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Button, Text, View, TextInput } from 'react-native';
import { primary } from '../assets/styles/stylesheet';
import Icon from 'react-native-vector-icons/Foundation';

export default class HomeScr extends Component {
  static navigationOptions = {
    title: 'Quantum',
    headerStyle: { backgroundColor: 'black' },
    headerTitleStyle: { color: "#ecf0f1", letterSpacing: 2 },
  }

  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}
