
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  
  return (
    <>
      <NavigationContainer>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      </NavigationContainer>
    </>
  );
}