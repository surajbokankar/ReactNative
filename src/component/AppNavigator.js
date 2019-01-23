import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
import AppDetails from './AppDetail';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import Dashboard1 from './Dashboard';
import BottomNav from './bottomNav';
import Drawer from './drawer';
import ApplyLoan from './ApplyLoan';
import AppliedLoan from './AppliedLoan';
const RootStack = createStackNavigator(
    {
      Home: Home,
      Detail:AppDetails,
      Login : Login,
      SignUp : SignUp,
      Dashboard: Dashboard1,
      Bottom:BottomNav,
      drawer:Drawer,
      ApplyLoan:ApplyLoan,
      AppliedLoan:AppliedLoan
    },
    {
      initialRouteName: 'Home'
      }
    
  );
  
  const AppContainer = createAppContainer(RootStack);
  export default AppContainer;