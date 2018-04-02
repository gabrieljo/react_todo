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
        <View style={styles.column}>
          <TouchableOpacity onPress={this._toggleComplete.bind(this)}>
            <View
              style={[
                styles.circle,
                this.state.isCompleted ? styles.completed : styles.uncompleted
              ]}
            />
          </TouchableOpacity>
          <Text
            style={[
              styles.text,
              this.state.isCompleted ? styles.completedText : ""
            ]}
          >
            I am todo
          </Text>
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
    this.setState({
      isEditing: true
    });
  };

  _finishEditing = () => {
    this.setState({
      isEditing: false
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
  }
});

export default ToDo;
