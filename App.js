import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RouteStack from './navigation/navigation' // Assuming your routeStack is exported from routes.js

export default function App() {
  return (
    <NavigationContainer>
      <RouteStack />
    </NavigationContainer>
  );
}