import React from 'react';
import { MDBAnimation } from 'mdbreact';

const InfiniteBounce = (props) => {
  return (
    <MDBAnimation type='bounce' infinite>
      {props.children}
    </MDBAnimation>
  );
};

export default InfiniteBounce;
