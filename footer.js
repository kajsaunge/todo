import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>Credits</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerText: {
    color: 'green',
    fontSize: 20,
    fontFamily: 'helvetica',
  }
})

export default Footer
