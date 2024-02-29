import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.YELP_API_KEY;

const API_URL = 'https://api.yelp.com/v3';

const headers = {
  Authorization: `Bearer ${API_KEY}`,
  'Content-Type': 'application/json',
};

export const searchRestaurants = async (term, location) => {
  try {
    const response = await axios.get(`${API_URL}/businesses/search`, {
      headers: headers,
      params: {
        term: term,
        location: location,
      },
    });
    return response.data.businesses;
  } catch (error) {
    console.error('Error searching for restaurants:', error);
    throw error;
  }
};

export const getRestaurantDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/businesses/${id}`, {
      headers: headers,
    });
    return response.data;
  } catch (error) {
    console.error('Error getting restaurant details:', error);
    throw error;
  }
};

export const searchReviews = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/businesses/${id}/reviews`, {
      headers: headers,
    });
    return response.data.reviews;
  } catch (error) {
    console.error('Error searching for reviews:', error);
    throw error;
  }
};
