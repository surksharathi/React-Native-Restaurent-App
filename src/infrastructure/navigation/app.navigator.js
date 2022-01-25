import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text} from 'react-native';
import { RestaurantsNavigator } from "./restaurants.navigator";
import { SafeArea } from "../../components/utlity/safe-area.component";
import Icon from 'react-native-vector-icons/FontAwesome';
import { MapScreen } from "../../features/map/screens/map.screen";
//import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurants: "home",
  Map: "map",
  Settings: "user",
};


// function MapScreen() {
//   return (
//     <SafeArea >
//       <Text>MapScreen</Text>
//     </SafeArea>
//   );
// }

function SettingsScreen() {
  return (
    <SafeArea >
      <Text>Settings!</Text>
    </SafeArea>
  );
}

const createScreenOption = ( {route}) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Icon name={iconName} size={size} color={color} />
    ),
  };
  }

export const AppNavigator = () => (
  <NavigationContainer>
  <Tab.Navigator
    screenOptions={createScreenOption }
    tabBarOptions={{
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
    <Tab.Screen name="Map" component={MapScreen} />
<Tab.Screen name="Settings" component={SettingsScreen} />
</Tab.Navigator>
</NavigationContainer>
);