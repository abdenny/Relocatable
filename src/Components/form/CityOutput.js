import React from 'react';
import Select from 'react-select';
import FadeInRight from '../animations/FadeInRight';

class CityOutput extends React.Component {
  render() {
    return (
      <>
        <FadeInRight>
          <div className='grey-text'>
            <p className='h5 text-center mb-4' style={{ paddingTop: '8rem' }}>
              What city are you moving to?
            </p>
            <Select
              value={this.props.selectedOption}
              onChange={this.props.handleInputChange}
              options={this.props.listOfCities}
            />
          </div>
        </FadeInRight>
      </>
    );
  }
}
export default CityOutput;
