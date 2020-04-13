import React from 'react';
import { MDBBtn, MDBIcon } from 'mdbreact';
import FadeIn from '../animations/FadeIn';

class FormButton extends React.Component {
  render() {
    return (
      <FadeIn>
        <div className='text-center'>
          <MDBBtn color='primary' onClick={this.props.buttonProp}>
            <MDBIcon icon='arrow-right' className='mr-2' />
            Next
          </MDBBtn>
        </div>
      </FadeIn>
    );
  }
}

export default FormButton;
