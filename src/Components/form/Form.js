import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import CityInput from './CityInput';
import CityOutput from './CityOutput';
import SalaryInput from './SalaryInput';
import FormButton from './FormButton';
import { connect } from 'react-redux';
import { testCaseAdd } from '../../Actions/actionTemplate';
import { Redirect } from 'react-router-dom';

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
      obj: null,
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

  handleFinalChange = (e) => {
    this.setState(
      {
        obj: {
          city1: this.state.selectedOption,
          city2: this.state.selectedOptionTwo,
          salary: this.state.salaryInput,
        },
      },
      () => {
        this.props.testCaseAdd(this.state.obj);
      }
    );
  };

  render() {
    console.log(this.state);
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md='12'>
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
            {this.state.selectedOptionTwo !== null &&
              this.state.obj === null && (
                <SalaryInput handleInputChange={this.handleSalaryChange} />
              )}
            {this.state.salaryInput !== null && this.state.obj === null && (
              <FormButton buttonProp={this.handleFinalChange} />
            )}
            {this.state.obj !== null && <Redirect to='/view' />}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    tempSomeArray: state.template.someArray,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    testCaseAdd: (dataObj) => dispatch(testCaseAdd(dataObj)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
