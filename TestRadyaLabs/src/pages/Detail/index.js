import React, {Component} from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {Fetchdetail} from '../../components'
export default class Detail extends Component {
  
  render() {
    return (
      <View style={{backgroundColor:'white',flex:1}}>
        <ScrollView>
				<Fetchdetail IDName={this.props.route.params.IDName}/>
				</ScrollView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
