

import React,{useContext} from "react";
import { Searchbar } from "react-native-paper";
 import styled from "styled-components/native";
import {  FlatList, } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from '../../../components/spacer/spacer.components';
import { SafeArea } from "../../../components/utlity/safe-area.component";
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;


const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
export const RestaurantsScreen = ( { resturant } ) => {

  const restaurantContext = useContext( RestaurantsContext );
  
  return(
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={( item ) => item.name}
      />
    </SafeArea>
  )
};
