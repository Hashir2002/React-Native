import React, { Component } from 'react';
import { View, TextInput,CameraRoll,ScrollView,Button,Image } from 'react-native';

// import SimpleTodo from "./Todo's/SimpleTodo";
import {Provider} from 'react-redux';
import Appss from "./Todo's/Serive";
import store from './Store'

// import FirebaseTodo from "./Todo's/FirebaseTodo";
// import FirebaseReduxTodo from "./Todo's/Firebase&ReduxTodo";

//  const styles = StyleSheet.createSimpleTodo
//    bigblue: {
//      color: 'blue',
//      fontWeight: 'bold',
//      fontSize: 30,
//      marginTop:100,

//    },
//    red: {
//      color: 'red'
//    },
//  });


 export default class App extends Component {render() {return (
 <Provider store={store}>
<Appss />
 </Provider> 

)}}
// _handleButtonPress = () => {
//   CameraRoll.getPhotos(
//       first: 20,
//       assetType: 'Photos',
//     })
//     .then(r => {
//       this.setState({ photos: r.edges });
//     })
//     .catch((err) => {
//        //Error Loading Images
//     });
//   };
// render() {
// return (
//   <View>
//     <Button title="Load Images" onPress={this._handleButtonPress} />
//     <ScrollView>
//       {this.state.photos.map((p, i) => {
//       return (
//         <Image
//           key={i}
//           style={{
//             width: 300,
//             height: 100,
//           }}
//           source={{ uri: p.node.image.uri }}
//         />
//       );
//     })}
//     </ScrollView>
//   </View>
// );
// }}
//       // <FirebaseTodo />
//       // <FirebaseReduxTodo />
     
// //       IIII );

// //   }

// // }