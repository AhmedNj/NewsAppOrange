//Components/News.js
import React from 'react'
import {Image, View, TextInput, Button, Text, StyleSheet } from 'react-native'

class News extends React.Component {

  render() {
    return (

      <View style = {styles.main_container}>
      <Text> Bonjour Ahmed NJIMOU </Text>
      <Text> Sélectionner le groupe :  </Text>
      </View>
    )
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













export default News
