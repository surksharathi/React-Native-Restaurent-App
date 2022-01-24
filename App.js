
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from './src/infrastructure/navigation';



export default function App() {
return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
        <RestaurantsContextProvider>
        <Navigation />
       </RestaurantsContextProvider>
      </LocationContextProvider>
      </ThemeProvider>
     
    </>
  );
}