import React from 'react';

import Logo from '../Logo/Logo.js';
import Info from '../Info/Info.js';


const Header = () => {
  return (
    <header className="header container">
      <Logo width="125" height="44" />
      <Info total={3} done={12} />
    </header>
  );
};

export default Header;
