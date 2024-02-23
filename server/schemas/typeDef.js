
const typeDefs = gql`
  type Restaurant {
    id: ID!
    name: String!
    address: String!
    cuisine: String!
    # Add more fields as needed
  }

  type Query {
    getRestaurants: [Restaurant!]!
    # Define more queries as needed
  }

  type Mutation {
    addFavoriteRestaurant(restaurantId: ID!): Restaurant!
    # Define more mutations as needed
  }
`;

module.exports = typeDefs;
