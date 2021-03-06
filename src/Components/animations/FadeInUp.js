import React from 'react';
import { MDBAnimation } from 'mdbreact';

const FadeInUp = (props) => {
  return (
    <MDBAnimation reaveal delay='.2s' type='fadeInUp' duration='1s'>
      {props.children}
    </MDBAnimation>
  );
};

export default FadeInUp;
