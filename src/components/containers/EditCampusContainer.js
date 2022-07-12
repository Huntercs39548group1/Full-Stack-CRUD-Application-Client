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
import { editCampusThunk } from '../../store/thunks';
import EditCampusView from '../views/EditCampusView';
import { fetchCampusThunk } from "../../store/thunks";

// import {editCampus} from '../store/actions/actionCreators.js';

class EditCampusContainer extends Component {
   // Get the specific campus data from back-end database
   componentDidMount() {
    // Get campus ID from URL (API link)
    this.props.fetchCampus(this.props.match.params.id);
  }
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
    
        // let campus = {
        //     name: this.state.name,
        //     address: this.state.address,
        //     description: this.state.description,
        //     campusId: this.state.campusID
        // };
        
        // // Add new student in back-end database
        // let editCampus = this.props.editCampus(campus);
    
        // // Update state, and trigger redirect to show the new student
        // if (editCampus){
        //   this.setState({
        //     name: "", 
        //     description: "", 
        //     campusID: null, 
        //     redirect: true, 
        //     redirectId: editCampus.id
        //   });
        // }
        const update = {
              name: this.state.name,
              address: this.state.address,
              description: this.state.description,
              campusId: this.state.campusID
          };
          this.props.editCampusThunk(this.id, update);
          this.setState({
            name:"",
            address: "",
            description: "",
            redirect: true,
            redirectID: this.state.campusID
          });
          
      };
//       // Unmount when the component is being removed from the DOM:
//   componentWillUnmount() { 
//     this.setState({redirect: false, redirectId: null});
// }   
    render() {
    // Redirect to new student's page after submit
    if(this.state.redirect) {
      return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
    }

    // Display the input form via the corresponding View component
    return (
      <div>
        <Header />
        <EditCampusView 
          campus={this.props.campus} 
          handleChange = {this.handleChange} 
          handleSubmit={this.handleSubmit}      
        />
      </div>          
    );
  }
}
// The following 2 input arguments are passed to the "connect" function used by "CampusContainer" component to connect to Redux Store.
// 1. The "mapState" argument specifies the data from Redux Store that the component needs.
// The "mapState" is called when the Store State changes, and it returns a data object of "campus".
const mapState = (state) => {
  return {
    campus: state.campus,  // Get the State object from Reducer "campus"
  };
};
// The following input argument is passed to the "connect" function used by "NewStudentContainer" component to connect to Redux Store.
// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
    return({
      fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
        eidtCampus: (campus) => dispatch(editCampusThunk(campus)),
    })
}
export default connect(mapState, mapDispatch)(EditCampusContainer);