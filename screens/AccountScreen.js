import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Button, Text, View, TextInput } from 'react-native';

export default class AccountsScr extends React.Component{
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
