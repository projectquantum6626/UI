import React, { Component } from 'react';
import { Text, View, Image, Badge } from 'react-native';
import PropTypes from 'prop-types';
import { list } from '../assets/styles/stylesheet';
import { Platform, RoundButton } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { validate } from '@babel/types';
import { PriceChangeLabel } from './PriceChangeLabel';

export default class MoverItem extends React.Component {
    constructor(props) {
        super(props);
      }

  render() {
    const data = this.props.data;
    const textColor = data.status;
    return (
    <View style={list.container}>
        <View style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Text style={{ fontSize: 20, fontWeight: '600', paddingHorizontal: 0, 
                    marginLeft: 5}}>{data.name}</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-start'}}>
                <Text style={{ fontSize: 12, fontWeight: '300', paddingHorizontal: 0,
                     marginLeft: 5}}>{data.fullName}</Text>
            </View>
        </View>
        <View style={{flex: 1}}>
                <View style={{ justifyContent: 'center', alignItems: 'flex-end', marginTop: 10, marginEnd: 15}}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', paddingHorizontal: 0, color: textColor }}>{data.change}</Text>
                    <Text style={{fontSize: 13, fontWeight: '400', paddingHorizontal: 10}}>{data.price}</Text>
                </View>
            </View>
        </View>
    );
  }
}