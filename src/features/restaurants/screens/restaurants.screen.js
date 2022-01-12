

import React from "react";
import { Searchbar } from "react-native-paper";
 import styled from "styled-components/native";
import { StatusBar, StyleSheet, SafeAreaView, Text, View, FlatList, } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from '../../../components/spacer/spacer.components';
import { SafeArea } from "../../../components/utlity/safe-area.component";


const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;


const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
export const  RestaurantsScreen = ({resturant}) => (
 <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
         <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
        { name: 13 },
        { name: 14 },
      ]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
    />
      </SafeArea>
);
