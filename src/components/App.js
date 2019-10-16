import React from 'react';
import './App.css';
import Header from "./Header/Header";
import SelectBox from './SelectBox/SelectBox';
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SelectBox />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
