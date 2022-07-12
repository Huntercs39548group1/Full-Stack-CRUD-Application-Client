/*==================================================
EditCampusContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import campus from "../../store/reducers/campus";
import { render } from '@testing-library/react';
import { editCampusThunk } from '../../store/thunks';
import EditCampusView from '../views/EditCampusView';
class EditCampusContainer extends Component {
    //Get Data from database
    constructor(props){
        super(props);
        this.state = {
            name: campus.name,
            address: campus.address,
            description: campus.description,
            campusID: campus.campusID,
            redirect: false,
            redirectID: null
        };
    }
      // Capture input data when it is entered
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

    // Take action after user click the submit button
    handleSubmit = async event => {
        event.preventDefault();  // Prevent browser reload/refresh after submit.
    
        let campus = {
            name: this.state.name,
            address: this.state.address,
            description: this.state.description,
            campusId: this.state.campusID
        };
        
        // Add new student in back-end database
        let editCampus = this.props.editCampus(campus);
    
        // Update state, and trigger redirect to show the new student
        if (editCampus){
          this.setState({
            name: "", 
            description: "", 
            campusID: null, 
            redirect: true, 
            redirectId: editCampus.id
          });
        }
      }
}

// The following input argument is passed to the "connect" function used by "NewStudentContainer" component to connect to Redux Store.
// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
    return({
        eidtCampus: (campus) => dispatch(editCampusThunk(campus)),
    })
}
export default connect(null, mapDispatch)(EditCampusContainer);