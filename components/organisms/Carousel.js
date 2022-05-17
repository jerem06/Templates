import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const source = require('../../src/assets/img/luca.png');

type Props = {};
const Carousel = (p: Props) => {
  /** ******************************************************************************************************************
   * Variables
   ******************************************************************************************************************** */

  // props
  const {
    data = [
      {
        source: require('../../src/assets/img/luca.png'),
        name: 'Luca',
        position: 'Manarola, Italy',
      },
      {
        source: require('../../src/assets/img/luca.png'),
        name: 'Luca',
        position: 'Manarola, Italy',
      },
      {
        source: require('../../src/assets/img/luca.png'),
        name: 'Luca',
        position: 'Manarola, Italy',
      },
    ],
  } = p;

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
      <Image source={source} />
    </View>
  );
};

const s = StyleSheet.create({});

export default Carousel;