import React from 'react';
import { MDBIcon } from 'mdbreact';

const Spinner = () => {
  return (
    <>
      <div className='text-center'>
        <MDBIcon
          style={{ marginTop: '10rem' }}
          icon='cog'
          pulse
          size='3x'
          fixed
        />
      </div>
    </>
  );
};

export default Spinner;
