import React from 'react';

import Select from 'react-select';

const CITIES = require('../../data/cities');

let listOfCities = CITIES.ALL.map((cities) => {
  return {
    value: `${cities.city}, ${cities.state}`,
    label: `${cities.city}, ${cities.state}`,
  };
});

class CityInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
    };
  }

  componentDidMount = (params) => {
    console.log(CITIES);
    console.log(listOfCities);
  };

  handleChange = (e) => {
    this.setState({
      searchResults: e.target.value,
    });
  };

  handleInputChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  render() {
    return (
      <>
        <div className='grey-text'>
          <Select
            value={this.state.selectedOption}
            onChange={this.handleInputChange}
            options={listOfCities}
          />
        </div>
      </>
    );
  }
}
export default CityInput;
