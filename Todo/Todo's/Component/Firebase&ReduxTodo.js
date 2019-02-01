import React, { Component } from 'react';
import {View,Text,StyleSheet,Button,ScrollView} from 'react-native';
 import Input from './Component/Input'
//  import Button from './Component/Button'
import { Delete ,  AddTodo,   updateTodo ,forData  } from '../Store/Actions';
import { connect } from 'react-redux';
 



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
      width: 75,
      borderRadius: 500,
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



 class App extends Component {
  constructor() {
    super();
    this.state = {
      AddInStage:'',
      update:false,

      Todo:[],
    };
  }

  componentDidMount=()=>{
    this.props.forData()
  }
  
  
    onAddText=()=>{
      const AddTodo = this.state.AddInStage
  if(AddTodo !== ''){
    this.props.AddTodo(AddTodo)
  this.setState({AddInStage:''})}
  
  else(this.errors('Enter a value'))}
  
  
  
  onDelectedText=(index)=>{
    const updateInd = this.props.Id[index]
    console.log(updateInd)
  
    this.props.Delete(updateInd)
  }
  
  onUpdateText=()=>{
    const AddTodo = this.state.AddInStage
    if(AddTodo !== ''){
      const updateInd = this.props.Id[this.state.updateInd]
    
      this.props.updateTodo(AddTodo , updateInd)
  
      this.setState({AddInStage:'',update:false})
  
    }
    else(this.errors('Enter a value'))
    }
    
  
    heb=(e)=>{
      this.setState({AddInStage:e.target.value})
         }
      
  errors =(value)=>{
  alert(value)
  }
  
    


  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
          <View style={styles.headerBox}>
              <View>
                  <Text style={{ fontSize: 24 }}>Firebase and Redux Todo</Text>
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
    {this.props.Todo.length !== 0 ?  (this.props.Todo.map((row, index) => {
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
function mapStateToProp(state) {
  return ({
    Todo:state.root.todo,
    Id:state.root.Id,
  })
}



 function mapDispatchToProp(dispatch) {
   return ({
    updateTodo: (val, ind) => { dispatch(updateTodo(val, ind)) },
    Delete: (ind) => { dispatch(Delete(ind)) },
    AddTodo: (value) => { dispatch(AddTodo(value)) },
    forData: () => { dispatch(forData())},
   
   })
 }

 export default connect(mapStateToProp, mapDispatchToProp)(App);