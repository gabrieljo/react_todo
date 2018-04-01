import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

class ToDo extends Component {
  state = {
    isEditing: false,
    isCompleted: false
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._toggleComplete.bind(this)}>
          <View
            style={[
              styles.circle,
              this.state.isCompleted ? styles.completed : styles.uncompleted
            ]}
          />
        </TouchableOpacity>
        <Text style={styles.text}>I am todo</Text>
      </View>
    );
  }

  _toggleComplete = () => {
    this.setState(prevState => {
      return {
        isCompleted: !prevState.isCompleted
      };
    });
  };
}

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    fontWeight: "600",
    fontSize: 20,
    marginVertical: 20
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    marginRight: 20
  },
  completed: {
    borderColor: "#bbb"
  },
  uncompleted: {
    borderColor: "#F23657"
  }
});

export default ToDo;
