import React from 'react';
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import FadeIn from '../animations/FadeIn';

const Features = () => {
  return (
    <>
      <FadeIn>
        <section className='text-center my-5'>
          <h2 className='h1-responsive font-weight-bold my-5'>
            Why Relocatable?
          </h2>
          <p className='lead grey-text w-responsive mx-auto mb-5'>
            Relocatable is a web app built in React to determine how a user’s
            salary fares relative to the cost of living across America.
          </p>
          <MDBRow>
            <MDBCol md='4'>
              <MDBIcon icon='chart-area' size='3x' className='red-text' />
              <h5 className='font-weight-bold my-4'>Design</h5>
              <p className='grey-text mb-md-0 mb-5'>
                Relocatable relies on multiple APIs, handles asynchronous data,
                and uses Redux for global state management.
              </p>
            </MDBCol>
            <MDBCol md='4'>
              <MDBIcon icon='hammer' size='3x' className='cyan-text' />
              <h5 className='font-weight-bold my-4'>Tools</h5>
              <p className='grey-text mb-md-0 mb-5'>
                Built with React, Redux, React Router, Material UI, and React
                Bootstrap.
              </p>
            </MDBCol>
            <MDBCol md='4'>
              <MDBIcon icon='mobile-alt' size='3x' className='orange-text' />
              <h5 className='font-weight-bold my-4'>User-Friendly</h5>
              <p className='grey-text mb-md-0 mb-5'>
                Developed using mobile-first principles.
              </p>
            </MDBCol>
          </MDBRow>
        </section>
      </FadeIn>
    </>
  );
};
export default Features;
