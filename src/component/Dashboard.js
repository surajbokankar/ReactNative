import React, { Component } from 'react';
import { StyleSheet, ScrollView,View, Text,TouchableHighlight,Button } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';
import {  Card, Title, Paragraph } from "react-native-paper";

export default class Dashboard1 extends Component {
  render() {
    // navigation=this.props.navigation;
    const items = [
      { name: 'Applied Loan', code: '#1abc9c' , screen:'AppliedLoan'},
      { name: 'Approved Loan', code: '#2ecc71' , screen:'ApprovedLoan'},
      { name: 'Pending', code: '#3498db', screen:'PendingLoan' },
      { name: 'Closed', code: '#9b59b6' , screen:'ClosedLoan'},
      { name: 'Rejected', code: '#34495e' , screen:'RejectedLoan'},
      { name: 'Apply Now', code: '#f1c40f', screen:'LoanTopUp' }
      
    ];
   
    return (
      <View>
    <ScrollView >
      <SectionGrid
        itemDimension={90}
        sections={[
          {
            title: 'Loan Status',
            data: items.slice(0, 6),
          },
          {
            title: 'EMI Status',
            data: items.slice(6, 12),
          },
        ]}
        style={styles.gridView}
        renderItem={({ item, section, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <TouchableHighlight
              onPress={() => navigation.navigate(item.screen)}
              style={styles.button}>
              <Text style={styles.itemName}>{item.name}</Text>
            </TouchableHighlight>
            
            {/* <Text style={styles.itemCode}>{item.code}</Text> */}
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
      />
    
    <View style={styles.container} >
      <Card>
        <Card.Content>
        <Title>PL00001985</Title>
        <Paragraph>Due Date : 2018-12-25</Paragraph>
        <Paragraph>Due Amount :2332.94</Paragraph>
        </Card.Content>
      </Card>
    </View>
    <View style={styles.container} >
      <Card>
        <Card.Content>
        <Title>PL00001985</Title>
        <Paragraph>Due Date : 2018-12-25</Paragraph>
        <Paragraph>Due Amount :2332.94</Paragraph>
        </Card.Content>
      </Card>
    </View>
    </ScrollView>
    
    </View>
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
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 120,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: 'grey',
    padding: 10,
  },
});