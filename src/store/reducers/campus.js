/*==================================================
/src/store/reducers/campus.js

This is a Reducer function that accepts 2 parameters: the previous state object (aka current state) and an action object. 
Depending on the Action object, the Reducer updates the State and return the new State object.
It also defines the State and its default initial value.
================================================== */
import {  DELETE_CAMPUS, EDIT_CAMPUS, FETCH_CAMPUS } from "../actions/actionTypes";  // Import Action Type
// const initialState = {
//   current: {
//      name: '',
//      description: '',
//      address: '',
//      image: null,
//      students: [],
//      editing: false
//   }
// }
// Define default Initial State
const initialState = {
  students: [],  // Empty students array
  campus: [],
};

// REDUCER:
const campus = (state = initialState, action) => {  // Use "initialState" as default Initial State
  switch (action.type) {
    case FETCH_CAMPUS:
      return action.payload;
    case DELETE_CAMPUS:
      return {...state, campus: state.campus.filter((campusId) => campusId !== action.payload)};
    case EDIT_CAMPUS:
      return state.map(campus => {
        return ( 
          campus.id === action.payload.id ? action.payload : campus
        );
      });

    default:
      // If the Reducer doesn't recognize the Action Type, returns the previous (current) State unchanged.
      return state;
  }
};

export default campus;