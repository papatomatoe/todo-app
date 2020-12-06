import React from 'react';

const Logo = (props) => {
  const { width, height } = props;
  return (
    <img
      className="header__logo"
      src="img/LOGO.svg"
      width={width}
      height={height}
      alt="ToDo Logo"
    />
  );
}

export default Logo;
