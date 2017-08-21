/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import ELComponent, {
  name,
  age,
  sum
} from './ELComponent';

import PropsTest from './PropsTest';
import StateTest from './StateTest';
import RefTest from './RefTest';
export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>

      </View>
    );
  }
}
export class Bananas extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      remove: false,
      result: ''
    });
  }
  render() {
    var params = {
      name: '小张',
      age: 18,
      sex: '男'
    };
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
      <Image source={pic} style={{width: 193, height: 110}} />
      <Text style={styles.instructions}>名字：{name}
        </Text>
        <Text style={styles.instructions}
onPress={()=>{
  var size = this.refs.reftest.getSize();
  this.setState({size:size,})
}}
        >获得气球大小ddd：{this.state.size}{name}
        </Text>
      <Text onPress={()=>{
        var result = sum(2,3);
        this.setState({result:result,})
      }}>2+3={this.state.result}</Text>
    <PropsTest  {...params}/>
    <StateTest/>
    <RefTest
ref="reftest"
    />
      </View>
    );
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

AppRegistry.registerComponent('AwesomeProject', () => Bananas);