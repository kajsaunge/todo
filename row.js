import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Row extends Component {
  render() {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.rowText}>{this.props.text}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rowContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5"
  },
  rowText: {
    fontSize: 24,
    color: "#4d4d4d"
  }
})
export default Row;