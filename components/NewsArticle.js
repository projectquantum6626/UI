import React, { Component } from 'react';
import { Text, View, Image, Badge } from 'react-native';
import PropTypes from 'prop-types';
import { card } from '../assets/styles/stylesheet';
import { Platform, RoundButton } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { validate } from '@babel/types';

export default class NewsArticle extends React.Component {
    constructor(props) {
        super(props);
      }

  render() {
    const data = this.props.data;
    const newsImage = require("../assets/images/sample-stock-2.jpg");
    return (
    <View style={card.container2}>
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text style={{ fontSize: 20, fontWeight: '600', paddingHorizontal: 0, 
                  marginTop: 10, marginLeft: 10 }}>{data.name}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={{ fontSize: 14, fontWeight: '400',  marginLeft: 10, marginTop: 15 }}>{data.summary}</Text>
            </View>

        </View>
    </View>
    );
  }
}