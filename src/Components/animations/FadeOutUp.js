import React from 'react';
import { MDBAnimation } from 'mdbreact';

const FadeOutUp = (props) => {
  return (
    <MDBAnimation type='fadeOutUp' duration='1s'>
      {props.children}
    </MDBAnimation>
  );
};

export default FadeOutUp;
