import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
import AppDetails from './AppDetail';
import Home from './Home';

const RootStack = createStackNavigator(
    {
      Home: Home,
      Detail:AppDetails
    },
    {
      initialRouteName: 'Home'
        }
    
  );
  
  const AppContainer = createAppContainer(RootStack);
  export default AppContainer;