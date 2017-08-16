import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Identity</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: 'green',
    fontSize: 30,
    fontFamily: 'helvetica',
  }
})

export default Header
