import React from 'react';
import { MDBAnimation } from 'mdbreact';

const fadeInLeft = (props) => {
  return (
    <MDBAnimation reveal type='fadeInLeft'>
      {props.children}
    </MDBAnimation>
  );
};

export default fadeInLeft;
