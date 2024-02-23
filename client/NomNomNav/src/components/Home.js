import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_RESTAURANTS } from '../queries';

const Home = () => {
  const { loading, error, data } = useQuery(GET_RESTAURANTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const restaurants = data.restaurants;

  return (
    <div>
      <h1>Restaurant Listings</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.description}</p>
            <Link to={`/restaurant/${restaurant.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;