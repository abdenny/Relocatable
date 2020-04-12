import React from 'react';
import Select from 'react-select';

class CityInput extends React.Component {
  render() {
    return (
      <>
        <div className='grey-text'>
          <p className='h5 text-center mb-4' style={{ paddingTop: '8rem' }}>
            What city do you live in?
          </p>
          <Select
            value={this.props.selectedOption}
            onChange={this.props.handleInputChange}
            options={this.props.listOfCities}
          />
        </div>
      </>
    );
  }
}
export default CityInput;
