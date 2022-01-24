

import React,{useContext} from "react";
import { Searchbar,ActivityIndicator, Colors  } from "react-native-paper";
 import styled from "styled-components/native";
import {  FlatList, } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from '../../../components/spacer/spacer.components';
import { SafeArea } from "../../../components/utlity/safe-area.component";
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';
// import {Search} from '../components/search.component'



const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
} )``;

const Loading = styled( ActivityIndicator )`
margin-left: -25px`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
export const RestaurantsScreen = ( { navigation } ) => {

  const {isLoading,  restaurants} = useContext( RestaurantsContext );

  return(
    <SafeArea>

     {/* <Search/> */}
      {isLoading&&(<LoadingContainer><Loading animating={isLoading} color={Colors.blue800} /></LoadingContainer>)}
      <RestaurantList
        data={restaurants}
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
