import React from 'react';
import { Link } from 'react-router-dom';
import '../Style.css';
import UserIcon from './Icons';

const Navbar = () => (
  <nav className="header">
    <div className="navigation">
      <h1>
        <Link className="logo" to="/"> Bookstore CMS </Link>
      </h1>
      <ul className="navbar">
        <li><Link className="author" to="/">BOOKS</Link></li>
        <li><Link className="author" to="/categories">CATEGORIES</Link></li>
      </ul>
    </div>
    <div className="user">
      <UserIcon />
    </div>
  </nav>
);

export default Navbar;
