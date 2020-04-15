import React from 'react';
import { MDBMedia, MDBIcon } from 'mdbreact';
import FadeInLefts from '../animations/FadeInLefts';

const PriceObject = (props) => {
  return (
    <FadeInLefts>
      <MDBMedia
        className='text-center'
        id='bottom'
        style={{ paddingBottom: '6rem' }}
      >
        <MDBMedia body>
          <MDBIcon
            icon='utensils'
            size='3x'
            className='indigo-text pr-3 ml-3'
          />
          <MDBMedia heading>Restaurants</MDBMedia>
          Restaurants in{' '}
          {props.moreExpensiveCity === 'City1'
            ? props.city1Name
            : props.city2Name}{' '}
          are <b>{props.restaurantDiff.toFixed(2)}</b>% more expensive
        </MDBMedia>
      </MDBMedia>
    </FadeInLefts>
  );
};

export default PriceObject;
