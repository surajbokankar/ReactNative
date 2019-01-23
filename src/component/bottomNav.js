import * as React from 'react';
import {StyleSheet} from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import Dashboard from './Dashboard';
import ApplyLoan from './ApplyLoan';
import LoanHistory from './LoanHistory';

const DashboardRoute = () =><Dashboard dashboard='Dashboard'/>; 

const ApplyLoanRoute = () => <ApplyLoan applyloan='ApplyLoan'/>;

const RecentsRoute = () => <LoanHistory  loanHistory="LoanHistory"/>;

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'dashboard', title: 'Dashboard', icon: 'home' },
      { key: 'applyloan', title: 'Apply Loan', icon: 'album' },
      { key: 'recents', title: 'Loan History', icon: 'history' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    dashboard: DashboardRoute,
    applyloan: ApplyLoanRoute,
    recents: RecentsRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        style={styles.BottomNavigation}
      />
    );
  }
}

 
const styles = StyleSheet.create({
  BottomNavigation: {
    backgroundColor: '#03A9F4',
  }
});