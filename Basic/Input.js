//  http://download.oracle.com/otn-pub/java/jdk/8u191-b12/2787e4a523244c269598db4e85c51e0c/jdk-8u191-windows-x64.exe

import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

export default class Input extends Component {

  render() {
    return (
     <View style={{
       borderBottomColor: '#000000',
       borderBottomWidth: 1 }}
       
       
     >
        <TextInput
         numberOfLines = {1}
{...this.props}
/>
     </View>
    );
  }
}