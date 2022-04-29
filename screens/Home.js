import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Carousel from '../components/organisms/Carousel';
import ImageVerticalRender from '../components/atoms/ImageVerticalRender';
import ImageVerticalFalList from '../components/molecules/ImageVerticalFalList';

type Props = {};

const Home = (p: Props) => {
  /** ******************************************************************************************************************
   * Variables
   ******************************************************************************************************************** */
  // props
  const {} = p;

  // const data = [
  //   {
  //     source: require('../../src/assets/img/luca.png'),
  //     name: 'Luca',
  //     position: 'Manarola, Italy',
  //   },
  //   {
  //     source: require('../../src/assets/img/luca.png'),
  //     name: 'Luca',
  //     position: 'Manarola, Italy',
  //   },
  //   {
  //     source: require('../../src/assets/img/luca.png'),
  //     name: 'Luca',
  //     position: 'Manarola, Italy',
  //   },
  // ];
  // ];

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
      <Carousel />
      {/*<ImageVerticalFalList data={data} />*/}
    </View>
  );
};

const s = StyleSheet.create({});

export default Home;
