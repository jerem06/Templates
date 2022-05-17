import React, {useEffect} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import ImageVerticalRender from '../atoms/ImageVerticalRender';

type Props = {};
const ImageVerticalFlatList = (p: Props) => {
  /** ******************************************************************************************************************
   * Variables
   ******************************************************************************************************************** */
  // props
  const {data = []} = p;

  /** ******************************************************************************************************************
   * Effects
   ******************************************************************************************************************** */
  useEffect(() => {}, []);

  /** ******************************************************************************************************************
   * Callbacks / handles
   ******************************************************************************************************************** */

  const renderItem = ({item}) => (
    <View style={s.ItemContainer}>
      <ImageVerticalRender item={item} />
    </View>
  );

  /** ******************************************************************************************************************
   * Renders
   ******************************************************************************************************************** */
  return (
    <View>
      <FlatList horizontal data={data} renderItem={renderItem} />
    </View>
  );
};

const s = StyleSheet.create({
  container: {},
  ItemContainer: {
    marginHorizontal: 5,
  },
});

export default ImageVerticalFlatList;
