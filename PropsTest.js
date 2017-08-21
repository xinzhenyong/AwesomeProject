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

export default class PropsTest extends Component {
  static defaultProps = {
    name: 'kggkk'
  }
  static propTypes = {
    name: PropTypes.string,
    sex: PropTypes.string.isRequired
  }


  render() {

    return <Text>
          {this.props.sex}Welcome to React Native!{this.props.name}
        </Text>

  }
}