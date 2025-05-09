import React from 'react';
import Bloglist from "../components/Bloglist";


function Welcome() {
  return (
    <>
    <div className="welcome">
      <div className="welcome-textc">
        <h1>&#x1F338; HELLO & WELCOME &#x1F338;</h1>
        <p>Explore our blog content!</p>

        </div>
      </div>

      <Bloglist/>
    </>
    
  );
}

export default Welcome;
