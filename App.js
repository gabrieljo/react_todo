/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  ScrollView,
  Platform
} from "react-native";
import ToDo from "./src/components/ToDo";

const { height, width } = Dimensions.get("window");

class App extends Component {
  state = {
    newTodo: ""
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Personal TODO</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder={"New To Do"}
            onChangeText={this._crontrolNewToDo.bind(this)}
            placeholderTextColor={"#999"}
            returnKeyType={"done"}
            autoCorrect={false}
          />
          //ScrollView안쪽으로 styles.todos 전달함
          <ScrollView contentContainerStyle={styles.todos}>
            <ToDo text="Todo" />
          </ScrollView>
        </View>
      </View>
    );
  }

  _crontrolNewToDo = text => {
    this.setState({
      newToDo: text
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F23657",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "400",
    marginBottom: 30
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50,50,50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 3
      }
    })
  },

  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 25
  },
  todos: {
    alignItems: "center"
  }
});

export default App;
