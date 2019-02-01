import React, { Component } from 'react';
import {View,Text,StyleSheet,Button,ScrollView} from 'react-native';
 import Input from './Component/Input'
//  import  from './Component/Button'


const styles = StyleSheet.create({
  container: {
      width: '100%',
      backgroundColor: '#F5FCFF',
      
  },
  headerBox: {
      flex: 1,
      alignItems: 'center',
  },
  headerSibling: {
      width: '100%',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly'
  },
  textBox: {
      height: 35,
      width: 250,
      padding: 2,
      paddingLeft: 10,
      borderWidth: 1,
      borderColor: 'black',
  },
  buttonStyle: {
borderRadius:'50%',   

width: 75,
  },
  todosBox: {
      flex: 1,
      marginTop: 35,
  },
  todosFlexBoxes: {
      
    flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'lightblue',
  },
  todoInnerBox: {
      flex: 1,
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      maxWidth: 150,
  }
})



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      AddInStage:'',
      update:false,
      Todo:[]
    };
  }

  componentDidMount=()=>{
    this.come()
  }
  
  come=()=>{
      alert('hi')
    fetch('http://localhost:2000/')
    .then(response => response.json())
    .then( Todo  => {this.setState({  Todo  });
alert('hi')
});
    
  
  }
  

  onAddText=()=>{
    const AddTodo = this.state.AddInStage
if(AddTodo !== ''){
const Todo = [...this.state.Todo,AddTodo]
this.setState({Todo: Todo,AddInStage:''})
}
else(this.setState({error:'Enter a value'}))
}



onDelectedText=(value)=>{
const Array4 = this.state.Todo
Array4.splice(value , 1)
this.setState({Todo:Array4,AddInStage:''})
}

onUpdateText=()=>{
const array = this.state.Todo;
if(this.state.AddInStage!==null&&this.state.AddInStage!==''){
array[this.state.updateInd] = this.state.AddInStage;
this.setState({Todo:array,AddInStage:'',update:false})
}
else(this.setState({error:'Enter a value'}))
}



  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
          <View style={styles.headerBox}>
          {console.table(this.state.Todo)}
              <View>
                  <Text style={{ fontSize: 24 }}>Simple Todo</Text>
                  </View>

                  <View style={styles.headerSibling}>
   <Input
    style={styles.textBox}
    onChangeText={(AddInStage) => this.setState({AddInStage})}
    value={this.state.AddInStage}
    placeholderTextColor = "#9a73ef"
 />
                            <View style={styles.buttonStyle}>

 {this.state.update?

 <Button onPress={this.onUpdateText} title='✔'   color='purple' />

 :<Button onPress={this.onAddText} title='Add'   color='green'/>}
                            </View>
                        </View>
                    </View>
                    <View style={styles.todosBox}>
    {this.state.Todo.length  ?  (this.state.Todo.map((row, index) => {
   return (
    <View key={index} style={styles.todosFlexBoxes}>

     <View style={styles.todoInnerBox}>
                                        <Text>{index + 1} . {row}</Text>
                                    </View>     
    <View style={{ width: 75, marginTop: 5,borderRadius:50 }}>
                                            <Button
                                                color='purple'
                                                onPress={()=>{this.setState({update:true,AddInStage:row,updateInd:index})}} title='✎' />
                                        </View>
                                        <View style={{ width: 75, marginTop: 5, marginBottom: 5,borderRadius:50 }}>
                                            <Button
                                                color='red'
 onPress={()=>this.onDelectedText(index)} title='✖'
                                            />
                                     
                                     </View>
    </View>

   )}))
 :<Text>No Todo</Text>}
 </View>
                </View>
                </ScrollView>
    
      );

  }

}