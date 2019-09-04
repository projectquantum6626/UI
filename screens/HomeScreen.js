import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Button, Text, View, TextInput, Image, Platform,
  ScrollView, StyleSheet, TouchableOpacity, Dimensions, } from 'react-native';
import { primary } from '../assets/styles/stylesheet';
import NewsArticle from '../components/NewsArticle';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

const { height, width } = Dimensions.get('window')

export default class HomeScr extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentWillMount() {
    this.startHeaderHeight = 65
    if (Platform.OS == 'android') {
        this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
}

  render() {
    const newsData = [
      {
        id: 1,
        name: "The S&P did something",
        summary: "These are all the things the S&P did today",
        image: "../assets/images/sample-stock-1.jpg"
      },
      {
        id: 2,
        name: "The stock market is down",
        summary: "Because of recent trends in something, the market...",
        imageSource: "../assets/images/sample-stock-2.jpg"
      },
    ];

    return (
      <SafeAreaView style={{flex: 1}}>
      <Text style={{ fontSize: 34, fontWeight: '700', paddingHorizontal: 20, 
              marginTop: Platform.OS == 'android' ? 60 : 30}}>Latest News</Text>
        <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 0}}>
          <View style={{
                  flexDirection: 'row', padding: 10,
                  backgroundColor: 'white', marginHorizontal: 20,
                  shadowOffset: { width: 0, height: 0 },
                  shadowColor: 'black',
                  shadowOpacity: 0.2,
                  elevation: 1,
                  marginTop: 15
              }}>
                  <Icon name="ios-search" size={15} style={{ marginRight: 10}} />
                  <TextInput
                      underlineColorAndroid="transparent"
                      placeholder="Find a Stock..."
                      placeholderTextColor="grey"
                      style={{ flex: 1, fontWeight: '100', backgroundColor: 'white' }}/>
          </View>                
        </View>
        <ScrollView scrollEventThrottle={16}>
          <View style={{flex: 1} [primary.container]}>
            <FlatList
              marginHorizontal={10}
              data={newsData}
              key={newsData.id}
              renderItem={({ item }) =>
                <NewsArticle data={item} />
              }
              keyExtractor={(item) => item.id.toString()}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}