import React, { Component } from 'react'
import { Text, StyleSheet, View,SafeAreaView,Image,TouchableOpacity } from 'react-native'
import {FlatGrid} from 'react-native-super-grid';

export default class Fetchhome extends Component {
	constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  getdata = async () => {
    try {
      const response = await fetch('http://18.221.132.15:7000/foods', {
        method: 'GET',
      });
      const json = await response.json();
      let data = json;
      this.setState({
        list: data,
      });
    } catch (error) {
      alert(error);
    }
  };
  componentDidMount() {
    this.getdata();
		
  }

	render( ) {
		return (
			<View>
				<FlatGrid
            itemDimension={130}
            data={this.state.list}
						contentContainerStyle={{
							flexGrow: 1,
							}}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() =>
								this.props.navigation.navigate(
									"Food Detail",
									{IDName: item.name},
									
								)
									}
									>
								<SafeAreaView>
                <Image source={{uri: item.image}} style={styles.images} />
                <SafeAreaView
                  style={{
                    position: 'absolute',
                    top: '75%',
                    left: 0,
                    right: 0,
                    bottom: '0%',
                    // justifyContent: 'center',
                    // alignItems: 'center',
										backgroundColor:'black',
										opacity:0.5,
                  }}>
                  <Text style={styles.textisi}>{item.name}</Text>
                </SafeAreaView>
              </SafeAreaView>
							</TouchableOpacity>
            )}
          />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	images: {
    aspectRatio: 1 / 1,
  },
	textisi: {
		color:'#ffffff',
		fontSize:16,
		padding:8,
		fontWeight:'bold'
	}
})
