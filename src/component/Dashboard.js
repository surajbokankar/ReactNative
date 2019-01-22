import React, { Component } from 'react';
import { StyleSheet, View, Text,TouchableHighlight } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';
 
export default class Dashboard1 extends Component {
    static navigationOptions ={
        title:'Dashboard',
        headerStyle: {
        backgroundColor: "#03A9F4"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  render() {
    const items = [
      { name: 'Applied Loan', code: '#1abc9c' , screen:'AppliedLoan'},
      { name: 'Approved Loan', code: '#2ecc71' },
      { name: 'Pending', code: '#3498db' },
      { name: 'Closed', code: '#9b59b6' },
      { name: 'Rejected', code: '#34495e' },
      { name: 'Apply Now', code: '#f1c40f' }
      
    ];
 
    return (
      <SectionGrid
        itemDimension={90}
        // staticDimension={300}
        // fixed
        // spacing={20}
        sections={[
          {
            title: 'Loan Status',
            data: items.slice(0, 6),
          },
          {
            title: 'EMI Status',
            data: items.slice(6, 12),
          },
          {
            title: 'Loan Graph',
            data: items.slice(12, 20),
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
    );
  }
}
 
const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
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
    backgroundColor: '#0b395b',
    color: 'white',
    padding: 10,
  },
});