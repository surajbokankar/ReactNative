import React,{Component} from 'react';
import {View,ScrollView,StyleSheet,Button,SectionList} from 'react-native';
import {  Card, Title, Paragraph,RadioButton ,Text} from "react-native-paper";
import { SectionGrid } from 'react-native-super-grid';

export default class LoanTopUp extends Component{
    state = {
        checked: '',
      };
    static navigationOptions ={
        title:'Apply Loan',
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
            { loanId: 'PL00003079', loanAmnt: '9999999' , tenure:'12'},
            { loanId: 'PL00003080', loanAmnt: '9999999' , tenure:'12'},
            { loanId: 'PL00003081', loanAmnt: '9999999' , tenure:'12'},
            { loanId: 'PL00003082', loanAmnt: '9999999' , tenure:'12'},
            { loanId: 'PL00003083', loanAmnt: '9999999' , tenure:'12'},
            { loanId: 'PL00003084', loanAmnt: '9999999' , tenure:'12'},
           
            
          ];
        navigation=this.props.navigation;
        const { checked } = this.state;
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
        renderItem={({ item}) => (
            <View 
            style={styles.container} >
            <Card>
            <RadioButton.Group
                    onValueChange={value => this.setState({ value })}
                    value={this.state.value}
                    status={checked === '{item.loanId}' ? 'checked' : 'unchecked'}
                    onSelect = {(index, value) => this.onSelect(index, value)}
                    // onPress={() => { this.setState({ checked: '{item.loanId}' }); }}
                    >
                
                    <Card.Content>
                    <RadioButton style={styles.radioButton} value={item.loanId}> </RadioButton>
                    <Text>{item.loanId} </Text>
                    <Paragraph>Loan Amount : {item.loanAmnt}</Paragraph>
                    <Paragraph>Tenure(In Months) :{item.tenure}</Paragraph>
                    </Card.Content>
                    
            </RadioButton.Group>
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
    radioButton:{
        alignSelf: 'flex-end'
    }
     
  });
