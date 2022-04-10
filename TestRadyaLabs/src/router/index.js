/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Beranda,
  Detail,
} from '../pages';
const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Beranda">
      <Stack.Screen
        name="Beranda"
        component={Beranda}
        options={{headerShown: false}}
      />
      
			<Stack.Screen
        name="Food Detail"
        component={Detail}
        options={{
					headerShown: true,
					headerStyle: {
            backgroundColor: '#3a99f2',
          },
					headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
				}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
