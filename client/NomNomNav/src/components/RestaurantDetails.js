import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_RESTAURANT_DETAILS } from '../queries';

const RestaurantDetails = ({ match }) => {
  const { loading, error, data } = useQuery(GET_RESTAURANT_DETAILS, {
    variables: { id: match.params.id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const restaurant = data.restaurant;

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.description}</p>
      {/* Additional details and components */}
    </div>
  );
};

export default RestaurantDetails;