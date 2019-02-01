import React, { Component } from 'react';

import{ createAppContainer ,createMaterialTopTabNavigator} from 'react-navigation'
import Home from"./Todo's/SimpleTodo"
import Contact from"./Todo's/ReduxTodo"
import kiy from"./Todo's/FirebaseTodo";
import kiry from"./Todo's/Firebase&ReduxTodo";

const AppRoutes = createMaterialTopTabNavigator({
  Simple:Home,
   Redux:Contact,
   Firebase:kiy,
    FirebasesRedux:kiry,
})

const AppContainer = createAppContainer(AppRoutes)
 
export default class App extends Component {
  render() {
    return (
        <AppContainer />
    );
  }
}


