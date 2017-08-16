import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Platform, ListView, Keyboard } from 'react-native'
import Header from "./header"
import Footer from "./footer"
import TodoInput from "./todos"
import Row from "./row"

class App extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      allComplete: false,
      value: "",
      items: [],
      dataSource: ds.cloneWithRows([])
    }
    this.setSource = this.setSource.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleToggleAllComplete = this.handleToggleAllComplete.bind(this);
  }
  setSource(items, itemsDatasource, otherState = {}) {
    this.setState({
      items,
      dataSource: this.state.dataSource.cloneWithRows(itemsDatasource),
      ...otherState
    })
  }
  handleToggleAllComplete() {
    const complete = !this.state.allComplete;
    const newItems = this.state.items.map((item) => ({
      ...item,
      complete
    }))
    this.setSource(newItems, newItems, { allComplete: complete })
  }
  handleAddItem() {
    if(!this.state.value) return
    const newItems = [
      ...this.state.items,
      {
        key: Date.now(),
        text: this.state.value,
        complete: false
      }
    ]
    this.setSource(newItems, newItems, { value: "" })
  }

  
// naming: change value to newTask
  render () {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <TodoInput
            value={this.state.value}
            onAddItem={this.handleAddItem}
            onChange={(value) => this.setState({ value })}
            onToggleAllComplete={this.handleToggleAllComplete}
          />
          <ListView
            style={styles.flatList}
            enableEmptySections
            dataSource={this.state.dataSource}
            onScroll={() => Keyboard.dismiss()}
            renderRow={({ key, ...value}) => {
              return (
                <Row
                  key={key}
                  {...value}
                />
              )
            }}
          />
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    ...Platform.select({
      ios: { paddingTop: 50 }
    })

  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  flatList: {
    marginVertical: 16,
    backgroundColor: '#FFF'
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 2,
    padding: 5,
    paddingLeft: 10,
    backgroundColor: 'silver'
  }
})

export default App;
