import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
import AppDetails from './AppDetail';
import Home from './Home';
import BottomNav from './bottomNav';
import Drawer from './drawer';

const RootStack = createStackNavigator(
    {
      Home: Home,
      Detail:AppDetails,
      Bottom:BottomNav,
      drawer:Drawer
    },
    {
      initialRouteName: 'Home'
      }
    
  );
  
  const AppContainer = createAppContainer(RootStack);
  export default AppContainer;