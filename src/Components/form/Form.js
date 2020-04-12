import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import CityInput from './CityInput';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md='12'>
            <form>
              <p className='h5 text-center mb-4' style={{ paddingTop: '8rem' }}>
                What city do you live in?
              </p>
              <CityInput />
              <div className='text-center'>
                <MDBBtn color='primary'>
                  <MDBIcon icon='arrow-right' className='mr-2' />
                  Next
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default Form;
