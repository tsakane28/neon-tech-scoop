
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLogo = () => {
  return (
    <Link to="/" className="relative z-10">
      <h1 className="text-2xl font-bold gradient-text">NeonTech</h1>
    </Link>
  );
};

export default NavbarLogo;
