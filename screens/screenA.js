import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';

type Props = {};
const ScreenA = (p: Props) => {
  /** ******************************************************************************************************************
   * Variables
   ******************************************************************************************************************** */
  // props
  const {} = p;

  /** ******************************************************************************************************************
   * Effects
   ******************************************************************************************************************** */
  useEffect(() => {}, []);

  /** ******************************************************************************************************************
   * Hooks / callbacks
   ******************************************************************************************************************** */

  /** ******************************************************************************************************************
   * Callbacks / handles
   ******************************************************************************************************************** */

  /** ******************************************************************************************************************
   * Renders
   ******************************************************************************************************************** */
  return (
    <View>
      <Text> Screen A </Text>
    </View>
  );
};

const s = StyleSheet.create({});

export default ScreenA;
