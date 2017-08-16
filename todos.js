import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

class TodoInput extends Component {
  render() {
    return (
      <View style={styles.body}>
        <TextInput
          value={this.props.value}
          onChangeText={this.props.onChange}
          onSubmitEditing={this.props.onAddItem}
          placeholder="What needs to be done?"
          blurOnSubmit={false}
          returnKeyType="done"
          style={styles.input}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    borderColor: 'gray', 
    borderWidth: 1
  }
})

export default TodoInput
