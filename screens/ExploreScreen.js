import React from 'react';
import { FlatList, ActivityIndicator, Button, Text, View, TextInput, Image, Platform,
  ScrollView, StyleSheet, TouchableOpacity, Dimensions, } from 'react-native';
import { primary } from '../assets/styles/stylesheet';
import StockCard from '../components/StockCard';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

const { height, width } = Dimensions.get('window')

export default class ExploreScr extends React.Component {
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
    const moverData = [
      {
        id: 1,
        name: "TSLA",
        fullName: "Tesla",
        price: "220.00",
        change: "+5.23 %",
        status: "green",
        arrow: "arrow-up"
      },
      {
        id: 2,
        name: "NFLX",
        fullName: "Netflix",
        price: "450.00",
        change: "-2.50 %",
        status: "red",
        arrow: "arrow-down"
      },
      {
        id: 3,
        name: "FB",
        fullName: "Facebook",
        price: "240.34",
        change: "-1.30 %",
        status: "red",
        arrow: "arrow-down"
      },
      {
        id: 4,
        name: "MSFT",
        fullName: "Microsoft",
        price: "342.45",
        change: "+3.45 %",
        status: "green",
        arrow: "arrow-up"
      },
      {
        id: 5,
        name: "QNTM",
        fullName: "Quantum",
        price: "532.65",
        change: "+8.75 %",
        status: "green",
        arrow: "arrow-up"
      },
    ];

    return (
      <SafeAreaView style={{flex: 1}}>
      <Text style={{ fontSize: 34, fontWeight: '700', paddingHorizontal: 20, 
              marginTop: Platform.OS == 'android' ? 60 : 30}}>Explore Stocks</Text>
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
            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20, 
                  marginTop: 5, marginBottom: 20}}>Big Movers</Text>
          <View style={{flex: 1} [primary.container]}>
            <FlatList
              marginHorizontal={15}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={moverData}
              key={moverData.id}
              renderItem={({ item }) =>
                <StockCard data={item} />
              }
              keyExtractor={(item) => item.id.toString()}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
