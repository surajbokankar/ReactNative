import React from "react";
import PhotoGrid from 'react-native-image-grid';
import { Image, TouchableOpacity, Text }  from  'react-native';


class BestGrid extends React.Component {
   navigation=null;   

    static navigationOptions ={
        title:'Home'
    };

  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    // Build an array of 60 photos
    console.log('componentDidMount',this.props.navigation);
    let items = Array.apply(null, Array(10)).map((v, i) => {
      return { id: i, src: 'https://i.ibb.co/169hbjy/11512970984637-Libas-Women-Maroon-Grey-Solid-Kurta-with-Trousers-4181512970984556-1.jpg' }
    });
    this.setState({ items });
  }

  render() {
     navigation=this.props.navigation;   
    return(
      <PhotoGrid
        data = { this.state.items }
        itemsPerRow = { 2 }
        itemMargin = { 1 }      
        itemPaddingHorizontal={1}
        renderHeader = { this.renderHeader }
        renderItem = { this.renderItem }
      />
    );
  }

  renderHeader() {
    return(
      <Text style={styles.text}>Favourite Brands</Text>
    );
  }

  renderItem(item, itemSize, itemPaddingHorizontal) {
      
    return(
      <TouchableOpacity
        key = { item.id }
        style = {{ width: itemSize, height: itemSize, paddingHorizontal: itemPaddingHorizontal }}
        title="Go to Details... again"
        onPress={() => navigation.navigate('Bottom')}
        >
        <Image
          resizeMode = "cover"
          style = {{ flex: 1 }}
          source = {{ uri: item.src }}
        />
      </TouchableOpacity>
    )
  }

}


const styles={
    text:{
        color:'blue',
        alignItems:'center',
        justifyContent:'center',
        fontSize:18,
        marginBottom:10,
        marginTop:10
    }
}

export default BestGrid;