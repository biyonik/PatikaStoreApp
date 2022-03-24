import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Searchbar.style';

const SearchBar = () => {
  return (
    <View>
      <TextInput style={styles.input} placeholder="Ara..." />
    </View>
  );
};

export default SearchBar;