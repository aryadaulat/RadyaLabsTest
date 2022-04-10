import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

export default class Fetchdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      listfilter: [],
      idnamefilter: '',
      name: '',
      image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-icon-15-design-template-1308df3f466a8e47aa6eef160855caf6_screen.jpg?ts=1627210280',
      desc: '',
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
        idnamefilter: this.props.IDName,
      });
    } catch (error) {
      alert(error);
    }
    this.filter();
  };
  filter = () => {
    if (this.state.idnamefilter != '') {
      console.log(this.state.list);
      let datafoods = this.state.list;
      let search = this.state.idnamefilter;
      datafoods = datafoods.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
      let checkname = Object.values(datafoods);

      this.setState({
        listfilter: checkname,
        name: checkname[0].name,
        image: checkname[0].image,
        desc: checkname[0].desc,
      });
			this.componentWillUnmount();
    } else {
      this.setState({
        listfilter: this.state.list,
      });
    }
  };

  componentDidMount = () => {
    this.getdata();
  };
  componentWillUnmount = () => {
    
  };
  render() {
    return (
      <View style={{backgroundColor:'white',flex:1,marginTop:10,marginHorizontal:10}}>
        <Image source={{uri: this.state.image}} style={styles.images} />
        <View style={{justifyContent:'center',alignItems:'center',marginVertical:10}}>
				<Text style={{fontSize: 20, color: '#000000', fontWeight: 'bold'}}>
          {this.state.name}
        </Text>
				</View>

        <Text style={{fontSize: 20, color: '#000000', fontWeight: '500'}}>
          How To :
        </Text>
        <Text style={{fontSize: 20, color: '#000000'}}>{this.state.desc}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  images: {
    aspectRatio: 1 / 1,
    marginHorizontal: '35%',
    borderRadius: 100,
  },
});
