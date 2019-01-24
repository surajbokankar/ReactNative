import React,{Component} from 'react';
import {View,ScrollView,StyleSheet,Button,SectionList} from 'react-native';
import {  Card, Title, Paragraph } from "react-native-paper";
import { SectionGrid } from 'react-native-super-grid';

export default class ApprovedLoan extends Component{
    static navigationOptions ={
        title:'Approved Loans',
        headerStyle: {
        backgroundColor: "#03A9F4"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
    render(){
        const items = [
            { loanId: 'PL00003077', loanAmnt: '9999999' , tenure:'12'},
            { loanId: 'PL00003078', loanAmnt: '9999999' , tenure:'12'},
          ];
        navigation=this.props.navigation;
        return(
            <ScrollView >
            <SectionList
           
        sections={[
          {
            title: 'Loan Status',
            data: items.slice(0, 8),
          },
        ]}
        style={styles.gridView}
        renderItem={({ item, section, index }) => (
            <View 
            style={styles.container} >
            <Card>
                <Card.Content>
                <Title>{item.loanId}</Title>
                <Paragraph>Loan Amount : {item.loanAmnt}</Paragraph>
                <Paragraph>Tenure(In Months) :{item.tenure}</Paragraph>
                </Card.Content>
                <Card.Actions>
                <Button 
                onPress={() => navigation.navigate('LoanDetails')}
                title="View Detail"></Button>
                </Card.Actions>
            </Card>
            </View>
            )}/>
             </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        marginTop: 10,
        marginBottom:10,
        marginRight: 10,
        marginLeft:10,
    },
    scrollView:{
        flex:1,
        flexDirection: 'column',
    },
    gridView: {
        flex:1,
        marginTop: 20,
        marginBottom:20,

      },
  });
