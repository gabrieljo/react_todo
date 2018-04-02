import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput
} from "react-native";

const { width, height } = Dimensions.get("window");

class ToDo extends Component {
  state = {
    isEditing: false,
    isCompleted: false,
    todoValue: ""
  };
  render() {
    const { text } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <TouchableOpacity onPress={this._toggleComplete.bind(this)}>
            <View
              style={[
                styles.circle,
                this.state.isCompleted ? styles.completed : styles.uncompleted
              ]}
            />
          </TouchableOpacity>
          {this.state.isEditing ? (
            <TextInput
              style={[
                styles.input,
                styles.text,
                this.state.isCompleted ? styles.completedText : ""
              ]}
              value={this.state.todoValue}
              multiline={true}
              onChangeText={this._constrolInput.bind(this)}
              returnKeyType={"done"}
              onBlur={this._finishEditing.bind(this)}
            />
          ) : (
            <Text
              style={[
                styles.text,
                this.state.isCompleted ? styles.completedText : ""
              ]}
            >
              {text}
            </Text>
          )}
        </View>

        {this.state.isEditing ? (
          <View style={styles.actions}>
            <TouchableOpacity onPress={this._finishEditing.bind(this)}>
              <View style={styles.actionContainer}>
                <Text style={styles.actionsText}>✅</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.actions}>
            <TouchableOpacity onPress={this._startEditing.bind(this)}>
              <View style={styles.actionContainer}>
                <Text style={styles.actionsText}>✏️</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.actionContainer}>
                <Text style={styles.actionsText}>❌</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
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

  _startEditing = () => {
    const { text } = this.props;

    this.setState({
      isEditing: true,
      todoValue: text
    });
  };

  _finishEditing = () => {
    this.setState({
      isEditing: false
    });
  };

  _constrolInput = text => {
    this.setState({
      todoValue: text
    });
  };
}

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    fontWeight: "600",
    fontSize: 20,
    marginVertical: 20,
    width: width / 2
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
  completedText: {
    color: "#bbb",
    textDecorationLine: "line-through"
  },
  uncompleted: {
    borderColor: "#F23657"
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: width / 2
  },
  actions: {
    flexDirection: "row"
  },
  actionContainer: {
    marginVertical: 10,
    marginHorizontal: 10
  },
  input: {
    marginVertical: 10,
    width: width / 2
  }
});

export default ToDo;
