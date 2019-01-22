import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
import AppDetails from './AppDetail';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import Dashboard from './Dashboard';
import BottomNav from './bottomNav';
import Drawer from './drawer';

const RootStack = createStackNavigator(
    {
      Home: Home,
      Detail:AppDetails,
      Login : Login,
      SignUp : SignUp,
      Dashboard: Dashboard,
      Bottom:BottomNav,
      drawer:Drawer
    },
    {
      initialRouteName: 'Home'
      }
    
  );
  
  const AppContainer = createAppContainer(RootStack);
  export default AppContainer;