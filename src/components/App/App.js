import React from 'react';

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer currentYear={new Date().getFullYear()} />
    </div>
  );
}

export default App;
