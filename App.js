import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Root from './src/routing/Root';
import Auth from './src/routing/Auth';

const App = () => {
  return <Auth />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 25,
  },
});

export default App;
