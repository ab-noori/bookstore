import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <div className="branding">
      <Link to="/boostore/"><h1>Bookstore CMS</h1></Link>
    </div>
    <ul>
      <li>
        <Link to="/boostore/">Home</Link>
      </li>
      <li>|</li>
      <li>
        <Link to="/boostore/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
