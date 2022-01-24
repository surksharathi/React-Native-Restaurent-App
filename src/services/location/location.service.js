import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  
  new Promise( ( resolve, reject ) => {
    console.log("searchTerm", searchTerm);
    const location = locations[searchTerm];
    console.log("location",location)
    if (location) {
      console.log("location",location)
      resolve(location);
    } else {
      reject(`No location found for ${searchTerm}`);
    }
  } );
}

export const locationTransform = (result) => {
  const formattedResponse = camelize( result );
  const { geometry = {} } = formattedResponse.result[0];
  const { lat, lag } = geometry.location;
  return{lat,lag}
}