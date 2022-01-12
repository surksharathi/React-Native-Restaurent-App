
import React from "react";
import { Text, View } from 'react-native';
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from "./src/components/utlity/safe-area.component";
import Icon from 'react-native-vector-icons/FontAwesome';

function MapScreen() {
  return (
    <SafeArea >
      <Text>MapScreen</Text>
    </SafeArea>
  );
}

function SettingsScreen() {
  return (
    <SafeArea >
      <Text>Settings!</Text>
    </SafeArea>
  );
}
const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurants: "home",
  Map: "map",
  Settings: "user",
};


export default function App() {

  const createScreenOption = ( {route}) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Icon name={iconName} size={size} color={color} />
    ),
  };
  }
  return (
    <>
     
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOption }
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
       </NavigationContainer>
      </ThemeProvider>
     
    </>
  );
}