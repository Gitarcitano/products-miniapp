import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {ScreenNames} from './screenNames';
import {MainStackParams} from './navigation';
import {Products} from '../screens/Products';
import {ProductsDetails} from '../screens/ProductsDetails';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator<MainStackParams>();

export function ProductsStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName={ScreenNames.ProductsScreen}>
        <Stack.Screen name={ScreenNames.ProductsScreen} component={Products} />
        <Stack.Screen
          name={ScreenNames.ProductsDetailScreen}
          component={ProductsDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
