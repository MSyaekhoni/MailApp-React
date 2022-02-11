import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {header: 'E - surat', value: true, username: '', password: ''};
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#9c27b0" />
        <View style={styles.headerBackground}>
          <Text style={styles.textHeader}>{this.state.header}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('./src/img/foto1.jpg')} style={styles.image} />
        </View>
        <View>
          <TextInput
            value={this.state.username}
            onChangeText={value => this.setState({username: value})}
            style={styles.textInput}
          />
          <TextInput
            value={this.state.password}
            onChangeText={value => this.setState({password: value})}
            style={styles.textInput}
          />
          <Switch
            value={this.state.value}
            onValueChange={() => this.setState({value: !this.state.value})}
            style={styles.switch}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  headerBackground: {
    backgroundColor: '#ab47bc',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
    letterSpacing: 10,
    color: '#ffffff',
  },
  imageContainer: {
    marginTop: 50,
    marginBottom: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {width: 200, height: 200},
  textInput: {
    borderWidth: 3,
    borderRadius: 30,
    borderColor: '#ab47bc',
    marginHorizontal: 30,
    marginTop: 10,
    fontSize: 20,
    paddingHorizontal: 10,
  },
  switch: {marginEnd: 30, marginTop: 10},
  button: {
    backgroundColor: '#9c27b0',
    marginHorizontal: 120,
    paddingVertical: 10,
    borderRadius: 15,
    elevation: 5,
  },
  textButton: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default App;
