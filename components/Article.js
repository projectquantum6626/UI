import React, { Component } from 'react';
import { Text, View, Image, Badge } from 'react-native';
import PropTypes from 'prop-types';
import { card } from '../assets/styles/stylesheet';
import { Platform, RoundButton } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { validate } from '@babel/types';

export default class Article extends React.Component {
    constructor(props) {
        super(props);
      }

  render() {
    const data = this.props.data;
    const newsImage = require('../assets/images/sample-stock-2.jpg');
    return (
    <View style={card.articleContainer}>
      {/*}
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{flexDirection:'column'}}>
          <Text>hello</Text>
          <Text>hey</Text>
        </View>
        <Text>world</Text>
      </View>
      */}
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{flex: 7, flexDirection:'column', marginLeft: 5}}>
          <Text style={{ fontSize: 20, fontWeight: '600'}}>{data.name}</Text>
          <Text style={{ fontSize: 14, fontWeight: '400'}}>{data.summary}</Text>
        </View>
        <Image style={{flex: 2, width: 70, height: 70, resizeMode:'stretch', marginVertical:10, marginRight:10, borderRadius: 10}} source={newsImage}/>
      </View>
    </View>
    );
  }
}