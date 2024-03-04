/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';
import ProductDetails from './screens/ProductDetails';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type TabNavigationParamList = {
  Home: undefined;
  Products: undefined;
  Cart: undefined;
};

export type RootStackParamList = {
  BottomTabs: NavigatorScreenParams<TabNavigationParamList>;
  ProductDetails: {
    productTitle: string;
    productDescription: string;
    productPrice: number;
    productImage: string;
  };
};

const Tab = createBottomTabNavigator<TabNavigationParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabs"
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            headerBackTitle: 'Home',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
