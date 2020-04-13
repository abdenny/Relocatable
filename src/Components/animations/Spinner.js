import React from 'react';
import { MDBIcon } from 'mdbreact';
import FadeIn from '../animations/FadeIn';
import FadeOutUp from '../animations/FadeOutUp';

const Spinner = () => {
  return (
    <>
      <div className='text-center'>
        <FadeIn>
          <FadeOutUp>
            <MDBIcon
              style={{ marginTop: '10rem' }}
              icon='cog'
              pulse
              size='3x'
              fixed
            />
          </FadeOutUp>
        </FadeIn>
      </div>
    </>
  );
};

export default Spinner;
