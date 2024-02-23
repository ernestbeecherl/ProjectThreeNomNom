
const typeDefs = gql`
  type Restaurant {
    id: ID
    name: String
    address: String
    phone: String
    rating: Float
    price: String
    loaction: Location
    coordinates: Coordinates
    photos: String
    url: String
  }

  type Category {
    alias: String
    title: String
  }

  type Reviews {
    _id: ID 
    rating: Float
    text: String
    timeCreated: String
    user: User
  }

  type User {
    _id: ID
    FirstName: String
    LastName: String
    email: String
    password: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    Restaurants: [Restaurant]
    Reviews: [Reviews]
    User: [User]
    categories: [Category]

  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth

  `;

module.exports = typeDefs;
