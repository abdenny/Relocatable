import React from 'react';
import { MDBAnimation } from 'mdbreact';

const FadeIN = (props) => {
  return (
    <MDBAnimation type='fadeIn' duration='1s'>
      {props.children}
    </MDBAnimation>
  );
};

export default FadeIN;
