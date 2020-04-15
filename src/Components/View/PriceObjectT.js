import React from 'react';
import { MDBMedia, MDBIcon } from 'mdbreact';
import FadeInLefts from '../animations/FadeInLefts';
const PriceObjectT = (props) => {
  return (
    <FadeInLefts>
      <MDBMedia className='text-center' style={{ paddingBottom: '6rem' }}>
        <MDBMedia body>
          <MDBIcon icon='bus' size='3x' className='red-text pr-3 ml-3' />
          <MDBMedia heading>Transportation</MDBMedia>
          Transportation costs in{' '}
          {props.moreExpensiveCity === 'City1'
            ? props.city1Name
            : props.city2Name}{' '}
          are <b>{props.transportationDiff}</b>% more expensive
        </MDBMedia>
      </MDBMedia>
    </FadeInLefts>
  );
};

export default PriceObjectT;
