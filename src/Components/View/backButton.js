import React from 'react';
import { MDBBtn, MDBIcon } from 'mdbreact';
const BackButton = () => {
  return (
    <div className='text-center' style={{ paddingBottom: '2rem' }}>
      <MDBBtn href='/form' gradient='aqua' rounded>
        <MDBIcon icon='arrow-left' className='mr-2' />
        Try another city
      </MDBBtn>
    </div>
  );
};

export default BackButton;
