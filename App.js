import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Service } from './Service';

export default class App extends React.Component {
  service = {};

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };

    this.service = new Service();
    this.service.getTodos().then(data => {
      this.setState({
        todos: data
      });
    });
  }

  onBtnPress() {
    this.service.postTodoList()
      .then(resp => {
        Alert.alert(resp.Name);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Add Item" onPress={this.onBtnPress.bind(this)}></Button>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Just for sake of the DEMO!!</Text>
        {/* {this.state.todos.map(
          (item) => {
            console.log(item);
            return (<Text>{item.Name}</Text>);
          })} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
