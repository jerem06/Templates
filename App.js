/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigations/stackNavigator';
//import TabNavigator from "./navigations/tabNavigator";

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
      {/*<TabNavigator/>*/}
    </NavigationContainer>
  );
};

const s = StyleSheet.create({});

export default App;
