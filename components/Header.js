import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>To do List</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    height: 80,
    backgroundColor: 'blue',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic'
  }
});

export default Header;