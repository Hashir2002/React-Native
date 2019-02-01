import React, { Component } from 'react';
import {View,Text,StyleSheet,Button,ScrollView} from 'react-native';
import Input from './Component/Input';
import  '../config'
import * as firebase  from 'firebase'
// import { stat } from 'fs';







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


export default class Firebase extends Component {
  constructor() {
    super();
    this.state = {
      Todo:[],
      AddInStage:'',
      id:[]
    };
  }

 componentDidMount=()=>{
   this.Data()
 }

 Data=()=>{
  firebase.database().ref('/FirebaseTodo').on('value', snapshot => {
    const obj = snapshot.val();
    const data = [];
    const id = [];

    for (let key in obj) {
      const newObj = obj[key];
      //  newObj['id'] = key;
      const newid = key;
       
       id.push(newid);
       data.push(newObj);
    }
     this.setState({ Todo: data,id:id });
  });
};


  onAddText=()=>{
    const AddTodo = this.state.AddInStage
if(AddTodo !== ''){

  firebase.database().ref("/FirebaseTodo").push(AddTodo)
this.setState({AddInStage:''})

}
else(this.errors('Enter a value'))
}

errors =(value)=>{
  alert(value)
  }

 onDelectedText=(index)=>{
   const updateInd = this.state.id[index]
   console.log(updateInd)
   firebase.database().ref('/FirebaseTodo').child(updateInd).remove();
 }


 onUpdateText=()=>{
   if(this.state.AddInStage !== null && this.state.AddInStage !== ''){
     const updateInd =   this.state.id[this.state.updateInd]
     console.log(updateInd)
firebase.database().ref('/').child(`FirebaseTodo/${updateInd}`).set(this.state.AddInStage)
this.setState({AddInStage:'',update:false})
}
   else(this.errors('Enter a value'))
   }

   heb=(e)=>{
this.setState({AddInStage:e.target.value})
   }


   render() {
    return ( 
    <ScrollView>
      <View style={styles.container}>
          <View style={styles.headerBox}>
              <View>
                  <Text style={{ fontSize: 24 }}>Firebase Todo</Text>
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