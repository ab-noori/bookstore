import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <div className="branding">
      <Link to="/"><h1>Bookstore CMS</h1></Link>
    </div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* <li>|</li> */}
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
