import React from 'react';
import { MDBMedia, MDBIcon } from 'mdbreact';
import FadeInRight from '../animations/FadeInRight';
const PriceObjectH = (props) => {
  return (
    <FadeInRight>
      <MDBMedia className='text-center' style={{ paddingBottom: '6rem' }}>
        <MDBMedia body>
          <MDBIcon icon='home' size='3x' className='indigo-text pr-3 ml-3' />
          <MDBMedia heading>Housing</MDBMedia>
          Housing costs in{' '}
          {props.moreExpensiveCity === 'City1'
            ? props.city1Name
            : props.city2Name}{' '}
          are <b>{props.apartmentDiff.toFixed(2)}</b>% more expensive
        </MDBMedia>
      </MDBMedia>
    </FadeInRight>
  );
};

export default PriceObjectH;
