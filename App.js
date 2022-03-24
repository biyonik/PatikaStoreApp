import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet
} from 'react-native';
import SearchBar from './src/components/SearchBar/Searchbar';


function App() {
  return (
    <SafeAreaView>
      <Text style={styles.main_title}>Patika Burada</Text>
      <SearchBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main_title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    elevation: 5,
  }
})

export default App;