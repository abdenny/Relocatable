import React from 'react';
// import Footer from './Footer';
import Header from './Header';
import './baselayout.css';
const BaseLayout = (props) => {
  return (
    <>
      <Header />

      {props.children}

      {/* <Footer /> */}
    </>
  );
};

export default BaseLayout;
