import React, {
  Component,
  PropTypes
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class RefTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 80,
    };

  }



  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (<View style={styles.container}>
 <Text onPress={()=>{
  this.setState({
    size:this.state.size+10
  })
 }}>
          bigger
        </Text>
 <Image source={pic} style={{width: this.state.size, height: this.state.size}} />
     
        </View>)

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});