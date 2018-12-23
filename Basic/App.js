import React, { Component } from 'react';
import { Button,View,Text,StyleSheet } from 'react-native';
import Input from './Input'

 const styles = StyleSheet.create({
   bigblue: {
     color: 'blue',
     fontWeight: 'bold',
     fontSize: 30,
     marginTop:100,

   },
   red: {
     color: 'red',
   },
 });


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '' ,
      FatherName:'',
      Age:'',
      Address:'' ,
      Cell:'',
      Show:true

    };
  }
onChangeText=()=>{
  this.setState({Show: ! this.state.Show})
}



  render() {
    return (
      <View style={styles.bigblue} >
{this.state.Show?(<View>
  <Input
   onChangeText={(Name) => this.setState({Name})}
   value={this.state.Name}
   placeholder = "Name : "
   placeholderTextColor = "#9a73ef"
/>
  <Input
   onChangeText={(FatherName) => this.setState({FatherName})}
   value={this.state.FatherName}
   placeholder = "FatherName : "
   placeholderTextColor = "#9a73ef"
/>
  <Input
   onChangeText={(Address) => this.setState({Address})}
   value={this.state.Address}
   placeholder = "Address : "
   placeholderTextColor = "#9a73ef"
/>
  <Input
   onChangeText={(Cell) => this.setState({Cell})}
   value={this.state.Cell}
   placeholder = "Cell Number : "
   placeholderTextColor = "#9a73ef"
/>
  <Input
   onChangeText={(Age) => this.setState({Age})}
   value={this.state.Age}
   placeholder = "Age : "
   placeholderTextColor = "#9a73ef"
/>

 <Button onPress={this.onChangeText} title='Submit' />

</View>
):(

<View>
<Text>Name : {this.state.Name}</Text>
<Text>FatherName : {this.state.FatherName}</Text>
<Text>Age : {this.state.Age}</Text>
<Text>Cell Number : {this.state.Cell}</Text>
<Text>Address : {this.state.Address}</Text>


 <Button onPress={this.onChangeText} title='Submit' />
</View>)}

      </View>




      );

  }

}