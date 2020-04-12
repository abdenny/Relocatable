import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import CityInput from './CityInput';
import CityOutput from './CityOutput';
import SalaryInput from './SalaryInput';
import FormButton from './FormButton';

const CITIES = require('../../data/cities');

let listOfCities = CITIES.ALL.map((cities) => {
  return {
    value: `${cities.city}, ${cities.state}`,
    label: `${cities.city}, ${cities.state}`,
  };
});

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
      selectedOptionTwo: null,
      salaryInput: null,
      listOfCities: listOfCities,
    };
  }

  handleInputChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  handleOutputChange = (selectedOptionTwo) => {
    this.setState({ selectedOptionTwo }, () =>
      console.log(`Option Two selected:`, this.state.selectedOptionTwo)
    );
  };

  handleSalaryChange = (e) => {
    this.setState({
      salaryInput: e.target.value,
    });
  };

  render() {
    console.log(this.state);
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md='12'>
            <form>
              {this.state.selectedOption == null && (
                <CityInput
                  listOfCities={this.state.listOfCities}
                  selectedOption={this.state.selectedOption}
                  handleInputChange={this.handleInputChange}
                />
              )}
              {this.state.selectedOption !== null &&
                this.state.selectedOptionTwo == null && (
                  <CityOutput
                    listOfCities={this.state.listOfCities}
                    selectedOption={this.state.selectedOptionTwo}
                    handleInputChange={this.handleOutputChange}
                  />
                )}
              {this.state.selectedOptionTwo !== null && (
                <SalaryInput handleInputChange={this.handleSalaryChange} />
              )}
              {this.state.salaryInput !== null && <FormButton />}
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default Form;
