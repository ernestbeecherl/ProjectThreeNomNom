import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { Provider } from 'react-redux';
import store from './utils/store';
import Header from './components/Header/';
import Footer from './components/Footer/index';
//import List from './components/RestaurantList/';
//import Card from './components/RestaurantCard/';
//import Details from './components/RestaurantDetails/';
//import Nav from './components/Navbar/Nav';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
      <Header/>
        <Provider store={store}>
          <Outlet /> 
        </Provider>
        <Footer/>
      </div>
    </ApolloProvider>
  );
}

export default App;
