import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ balance }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Bank App</Link>
        <div className="navbar-text ml-auto">
          Balance: ${balance}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
