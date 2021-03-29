import React from 'react';
import {Button, Text} from 'react-native';
import {ScreenNames} from '../../navigation/screenNames';

export function Products({navigation}: any) {
  return (
    <>
      <Text>Products Home</Text>
      <Button
        title="Go to Product Details Screen"
        onPress={() => navigation.navigate(ScreenNames.ProductsDetailScreen)}
      />
    </>
  );
}
