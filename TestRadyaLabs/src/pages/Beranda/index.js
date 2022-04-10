import React, {Component, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {Fetchhome} from '../../components'

export default class Beranda extends Component {
 
  render() {
    return (
      <SafeAreaView style={styles.page}>
        <SafeAreaView style={styles.header}>
          <Text style={styles.textwhite}>List Foods</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.list}>
				<Fetchhome navigation = {this.props.navigation}/>
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 0.1,
    backgroundColor: '#3a99f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textwhite: {
    color: 'white',
    fontSize: 25,
  },
  list: {
    flex: 0.9,
  },
  
});
