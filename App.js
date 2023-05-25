import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Root from './src/routing/Root';
import Auth from './src/routing/Auth';
import { useSelector } from 'react-redux';

const App = () => {
  const reduxState = useSelector(({ auth  , root , language}) => {
    console.log("🚀 ~ file: App.js ~ line 13 ~ reduxState ~ auth", auth);
    return {
        getUserProfileLoading: auth.getUserProfileLoading,
        isLoggedIn: auth.isLoggedIn,
        user: auth.user,
        // language:language?.language?.lan
    };
});
  const renderRouting = (value, initial) => {
    console.log("🚀 ~ file: App.js:18 ~ renderRouting ~ initial:", initial)
    console.log("🚀 ~ file: App.js:18 ~ renderRouting ~ value:", value)
    switch (value) {
      case true:
        return <Auth />;
      case false:
        return <Auth initial={initial} />;
      default:
        return null;
    }
  };

  return (
    renderRouting(reduxState?.isLoggedIn, reduxState?.isIntialRoute)

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 25,
  },
});

export default App;
