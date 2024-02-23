import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import RestaurantDetails from './components/RestaurantDetails';
import Auth from './components/Auth';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/restaurant/:id" component={RestaurantDetails} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;