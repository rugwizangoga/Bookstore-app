import React from 'react';
import { Link } from 'react-router-dom';
import '../Style.css';

const Navbar = () => (
  <nav>
    <div className="navigation">
      <h1>
        <Link className="author" to="/"> Bookstore CMS </Link>
      </h1>
      <ul className="navbar">
        <li><Link className="author" to="/">BOOKS</Link></li>
        <li><Link className="author" to="/categories">CATEGORIES</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
