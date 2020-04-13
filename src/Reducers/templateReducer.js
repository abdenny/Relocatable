import {
  TESTCASE_ADD_TO_ARRAY,
  TESTCASE_DELETE_FROM_ARRAY,
} from '../Actions/actionTypes';

let templateReducer = (state, action) => {
  //initialize state
  if (state === undefined) {
    state = {
      someArray: [
        {
          city1: '',
          city2: '',
          salary: '',
        },
      ],
    };
  }
  switch (action.type) {
    case TESTCASE_ADD_TO_ARRAY:
      return {
        ...state,
        someArray: state.someArray.concat(action.data), //passing in data from action
      };
    case TESTCASE_DELETE_FROM_ARRAY:
      let filteredArray = state.someArray.filter((item) => {
        return item.id !== action.id;
      });
      return {
        ...state,
        someArray: filteredArray, //passing in data from action
      };
    default:
      return state;
  }
};

export default templateReducer;
