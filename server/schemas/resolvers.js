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
            Authorization: `Bearer joyVR4sZF7Iw4usNaD0b4UM5KgNvrs67HFZ9SecXMjT5966uzr9ENXIndrmx5EMx8eQzOGp23x1sf8GG9JDB1qPCH_m3kws18wvnL0bodJ8a78JJ7ATc1xYfPvnXZXYx`,
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

Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw AuthenticationError;
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw AuthenticationError;
        }
  
        const token = signToken(user);
  
        return { token, user };
      }
    }
};

module.exports = resolvers;
