<<<<<<< HEAD
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
=======
//import React from 'react'
//import ReactDOM from 'react-dom/client'
//import App from '../App.jsx'
import '../index.css'
import Home from './pages/Home';
import Login from './pages/Login'; 
import ReactDOM from 'react-dom/client'; 
import React from 'react'; 
import App from '../App.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
>>>>>>> 218d8179e952b9decdce5eb0251804e4566f0769
