import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';

const App = createStackNavigator();

const AuthRoutes = () => (
  <App.Navigator screenOptions={{
    headerShown: false,
  }}
  >
    <App.Screen name="SignIn" component={SignIn} />
  </App.Navigator>
);

export default AuthRoutes;
