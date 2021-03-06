import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

const Footer = () => {
  return (
    <MDBFooter
      color='unique-color
'
      className='font-small pt-4 '
    >
      <MDBContainer fluid className='text-center text-md-left'>
        <MDBRow>
          <MDBCol md='6'>
            <h5 className='title'>Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a href='https://austindenny.me'> Austin Denny </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
