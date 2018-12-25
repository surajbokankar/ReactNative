import React from 'react';
import {View,Text} from 'react-native';
import {
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';
  import Home from './Home';
  import Details from './AppDetail';
export default  class Router extends React.Component{
    render(){
        return(
            <View>
<Switch>
          <Route exact path="/"  component={Home} />
          <Route exact path="/details"  component={Details} />
          <Redirect to="/" />
          </Switch>
            </View>


        );
    }
}