import { render } from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const Main = () => {
  return (
    <Router>
      <div>
        {/* Header or Navigation component can be added here if needed */}
        <Switch>
          <Route path="./pages/Home" exact component={Home} />
          <Route path="./src/pages/Login" component={Login} />
          <Route path="./src/pages/Signup" component={Signup} />
          {/* Add more routes for different pages or components */}
        </Switch>
        {/* Footer component can be added here if needed */}
      </div>
    </Router>
  );
};

export default Main;
