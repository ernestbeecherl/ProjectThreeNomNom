// Import necessary libraries for making requests to Yelp API
const axios = require('axios');
const { signToken, AuthenticationError } = require('../utils/auth');
const { Profile } = require('../models');

const resolvers = {
  Query: {
    async searchRestaurants(_, { term, location }) {
      try {
        // Make a request to Yelp API
        const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
          headers: {
            Authorization: `Bearer YOUR_YELP_API_KEY`,
          },
          params: {
            term,
            location,
          },
        });

        // Process the response and return relevant data
        return response.data.businesses.map(business => ({
          id: business.id,
          name: business.name,
          address: business.location.address1,
          rating: business.rating,
          // Add more fields as needed
        }));
      } catch (error) {
        console.error('Error fetching restaurants:', error);
        throw new Error('Failed to fetch restaurants');
      }
    },
  },
};

module.exports = resolvers;
