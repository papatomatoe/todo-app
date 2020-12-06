import React from 'react';

const Info = (props) => {
  const { total, done } = props;
  return (
    <ul className="header__list">
      <li className="header__item">
        <p className="header__text">
          <span className="header__label">Total: </span>
          <span className="header__vlaue">{total}</span>
        </p>
      </li>
      <li className="header__item">
        <p className="header__text">
          <span className="header__label">Done: </span>
          <span className="header__vlaue">{done}</span>
        </p>
      </li>
    </ul>
  );
}

export default Info;
