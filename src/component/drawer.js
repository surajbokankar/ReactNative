import * as React from 'react';
import { Drawer } from 'react-native-paper';
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Login   from './Login';
import SignUp   from './SignUp';
import Dashboard   from './Dashboard';

export default class MyComponent extends React.Component {
  navigation =null;
  state = {
    active: 'Dashboard',
  };
  render() {
    const { active } = this.state;
    navigation=this.props.navigation;
    return (
      <Drawer.Section 
      title="Menu">
        <Drawer.Item
          label="Dashboard"
          onPress={() => navigation.navigate('Dashboard')}
        />
        <Drawer.Item
          label="Apply Loan"
          onPress={() => navigation.navigate('ApplyLoan')}
        />
     </Drawer.Section>
    );
  }
}

// import React from 'react'
// import { Text, Animated, Easing } from 'react-native'
// import { StackNavigator, DrawerNavigator } from 'react-navigation'
// import Login   from './Login';
// import SignUp   from './SignUp';
// import Dashboard   from './Dashboard';

// // https://github.com/react-community/react-navigation/issues/1254
// const noTransitionConfig = () => ({
//   transitionSpec: {
//     duration: 0,
//     timing: Animated.timing,
//     easing: Easing.step0
//   }
// })

// // drawer stack
// const DrawerStack = DrawerNavigator({
//   Login: { screen: Login },
//   SignUp: { screen: SignUp },
//   Dashboard: {screen: Dashboard}
// }, {
//   gesturesEnabled: false
// })

// const DrawerNavigation = StackNavigator({
//   DrawerStack: { screen: DrawerStack }
// }, {
//   headerMode: 'float',
//   navigationOptions: ({navigation}) => ({
//     headerStyle: {backgroundColor: 'green'},
//     title: 'Logged In to your app!',
//     gesturesEnabled: false,
//     headerLeft: <Text onPress={() => {
//       // Coming soon: navigation.navigate('DrawerToggle')
//       // https://github.com/react-community/react-navigation/pull/2492
//       if (navigation.state.index === 0) {
//         navigation.navigate('DrawerOpen')
//       } else {
//         navigation.navigate('DrawerClose')
//       }
//     }}>Menu</Text>
//   })
// })

// // login stack
// const LoginStack = StackNavigator({
//   Login: { screen: Login },
//   SignUp: { screen: SignUp },
// }, {
//   headerMode: 'float',
//   navigationOptions: {
//     headerStyle: {backgroundColor: 'red'},
//     title: 'You are not logged in'
//   }
// })

// // Manifest of possible screens
// const PrimaryNav = StackNavigator({
//   loginStack: { screen: LoginStack },
//   drawerStack: { screen: DrawerNavigation }
// }, {
//   // Default config for all screens
//   headerMode: 'none',
//   title: 'Main',
//   initialRouteName: 'loginStack',
//   transitionConfig: noTransitionConfig
// })

// export default PrimaryNav