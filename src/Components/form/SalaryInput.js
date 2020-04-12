import React from 'react';
import { MDBInput } from 'mdbreact';
import FadeInRight from '../animations/FadeInRight';

class SalaryInput extends React.Component {
  render() {
    return (
      <FadeInRight>
        <div className='grey-text'>
          <p className='h5 text-center mb-4' style={{ paddingTop: '8rem' }}>
            What is your salary?
          </p>
          <MDBInput
            onChange={this.props.handleInputChange}
            label='Ex: 50,000'
            icon='dollar-sign'
          />
        </div>
      </FadeInRight>
    );
  }
}
export default SalaryInput;
