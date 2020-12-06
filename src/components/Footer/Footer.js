import React from 'react';

import Logo from '../Logo/Logo.js';

const Footer = (props) => {
  const { currentYear } = props;
  return (
    <footer className="footer container">
      <Logo width="44" height="15" />
      <p className="footer__copy">{currentYear}</p>
    </footer>
  );
};

export default Footer;
