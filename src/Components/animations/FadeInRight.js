import React from 'react';
import { MDBAnimation } from 'mdbreact';

const fadeInRight = (props) => {
  return <MDBAnimation type='fadeInRight'>{props.children}</MDBAnimation>;
};

export default fadeInRight;
