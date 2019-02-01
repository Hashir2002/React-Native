import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

export default class Input extends Component {

  render() {
    return (
     <View style={{
       borderColor: '#000000',
       borderWidth: 2 }}
       
       
     >
        <TextInput
         numberOfLines = {1}
{...this.props}
/>
     </View>
    );
  }
}
