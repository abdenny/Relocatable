import {
  TESTCASE1,
  TESTCASE_ADD_TO_ARRAY,
  TESTCASE_DELETE_FROM_ARRAY,
} from '../Actions/actionTypes';

let templateReducer = (state, action) => {
  //initialize state
  if (state === undefined) {
    state = {
      count: 0,
      someArray: [
        {
          name: 'austin',
          age: 21,
          id: 1,
        },
        {
          name: 'Haye',
          age: 25,
          id: 2,
        },
        {
          name: 'Daniel',
          age: 27,
          id: 3,
        },
      ], //array of objects
    };
  }
  switch (action.type) {
    case TESTCASE1:
      return {
        ...state,
        count: state.count + action.count,
      };
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
