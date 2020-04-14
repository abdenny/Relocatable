import React from 'react';
import { MDBAnimation } from 'mdbreact';

const FadeInUp = (props) => {
  return (
    <MDBAnimation type='fadeInUp' duration='1s'>
      {props.children}
    </MDBAnimation>
  );
};

export default FadeInUp;
