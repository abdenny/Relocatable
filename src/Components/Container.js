import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testCaseAdd } from '../Actions/actionTemplate';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        id: 4,
        name: 'Alex',
        age: 21,
      },
    };
  }

  render() {
    return (
      <>
        <button onClick={() => this.props.testCaseAdd(this.state.obj)}>
          TestCaseAdd
        </button>
      </>
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
export default connect(mapStateToProps, mapDispatchToProps)(Container);
