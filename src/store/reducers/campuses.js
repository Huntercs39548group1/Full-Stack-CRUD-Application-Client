/*==================================================
/src/store/reducers/campuses.js

This is a Reducer function that accepts 2 parameters: the previous state object (aka current state) and an action object. 
Depending on the Action object, the Reducer updates the State and return the new State object.
It also defines the State and its default initial value.
================================================== */
import * as at from "../actions/actionTypes";  // Import Action Types ("at" keyword for Action Type)

// const initialState = {
//    current: {
//       name: '',
//       description: '',
//       address: '',
//       image: null,
//       editing: false
//    }
// }
// REDUCER:
const allCampuses = (state = [], action) => {  // Empty array as default Initial State
  console.log(state,"123");
  switch (action.type) {
    case at.FETCH_ALL_CAMPUSES:
      return action.payload;
    case at.ADD_CAMPUS:
      return [...state, action.payload]
    case at.DELETE_CAMPUS:
      return state.filter(campus => campus.id !== action.payload);
    case at.EDIT_CAMPUS:
          // return state.map(editcampus => {
          //   return ( 
          //     editcampus.id === action.payload.id ? action.payload : editcampus
          //   );
          // });
      const editCampus = state.campus.map(campus =>{
        if(campus.id === action.payload.id){
          return{...campus, ...action.updateinfo}
            }else{
              return campus;
            };
          });
          return{...state, campus:editCampus}
    default:
      // If the Reducer doesn't recognize the Action Type, returns the previous (current) State unchanged.
      return state;
  }
};

export default allCampuses;