//import Navbar from "../components/NavBar/";
import Navbar from './components/NavBar/Navbar';
import React from "react";

const Home = () => {
    return (
        <main>
          <div className="flex-row justify-center">
            <div
              className="col-12 col-md-10 mb-3 p-3"
              style={{ border: '1px dotted #1a1a1a' }}
            >
              <ThoughtForm />
            </div>
            <div className="col-12 col-md-8 mb-3">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <ThoughtList
                  thoughts={thoughts}
                  title="Some Feed for Thought(s)..."
                />
              )}
            </div>
          </div>
        </main>
      );
    };
    
    export default Home;