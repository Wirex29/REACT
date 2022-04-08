import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StatusBar, StyleSheet} from 'react-native';

import Navigation from './components/nav/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Navigation></Navigation>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  wrap: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default App;
