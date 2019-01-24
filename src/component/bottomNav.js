import * as React from 'react';
import {StyleSheet} from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import Dashboard from './Dashboard';
import ApplyLoan from './ApplyLoan';
import LoanHistory from './LoanHistory';
import Refferal from './Refferal';

const DashboardRoute = () =><Dashboard dashboard='Dashboard'/>; 

const ApplyLoanRoute = () => <ApplyLoan applyloan='ApplyLoan'/>;

const RecentsRoute = () => <LoanHistory  loanHistory="LoanHistory"/>;

const RefferalRoute = () => <Refferal  refferal="Refferal"/>;

export default class MyComponent extends React.Component {
  static navigationOptions = {
    title: "Dashboard",
    headerStyle: {
      backgroundColor: "#0b395b"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }
  state = {
    index: 0,
    routes: [
      { key: 'dashboard', title: 'Dashboard', icon: 'home' },
      { key: 'applyloan', title: 'Apply Loan', icon: 'album' },
      { key: 'recents', title: 'Loan History', icon: 'history' },
      { key: 'refferal', title: 'Referral', icon: 'bookmark' },
    ],
    barColor:'#000'
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    dashboard: DashboardRoute,
    applyloan: ApplyLoanRoute,
    recents: RecentsRoute,
    refferal:RefferalRoute
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        activeColor={'#00b0af'}
        barStyle={{backgroundColor: 'white'}} inactiveColor={'grey'} 
      />
    );
  }
}

