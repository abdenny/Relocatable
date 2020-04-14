import React from 'react';
import { MDBMedia } from 'mdbreact';

const PriceObject = (props) => {
  return (
    <MDBMedia>
      <MDBMedia left className='mr-3' href='#'>
        <MDBMedia
          object
          src='https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg'
          alt=''
        />
      </MDBMedia>
      <MDBMedia body>
        <MDBMedia heading>Media heading</MDBMedia>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
        Donec lacinia congue felis in faucibus.
      </MDBMedia>
    </MDBMedia>
  );
};

export default PriceObject;
