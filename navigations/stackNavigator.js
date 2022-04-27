import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';

type Props = {};
const StackNavigator = (p: Props) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="StackNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
