/*==================================================
EditStudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { editStudentThunk } from '../../store/thunks';
import { EditStudentView } from '../views';
import { fetchStudentThunk } from "../../store/thunks";

// import {editStudent} from '../store/actions/actionCreators.js';

class EditStudentContainer extends Component {
   // Get the specific Student data from back-end database

    //Get Data from database
    constructor(props){
        super(props);
        this.state = {
          firstname: "",
          lastname: "",
          email: "",
<<<<<<< HEAD
=======
          imageUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
>>>>>>> f2aae7a25a49da86b906897eba524dfabcc699bc
          gpa: 0.0,
          campusId: null,
          redirect: false,
          redirectID: null 
        };

    }
    componentDidMount() {
      // Get campus ID from URL (API link)
      this.props.fetchStudent(window.location.pathname.slice(-1));
          this.setState({
            firstname: this.props.student.firstname,
            lastname: this.props.student.lastname,
            email: this.props.student.email,
<<<<<<< HEAD
=======
            imageUrl: this.props.student.imageUrl,
>>>>>>> f2aae7a25a49da86b906897eba524dfabcc699bc
            gpa: this.props.student.gpa,
            campusId: this.props.student.campusId,
            redirect: false, 
            redirectId: null
          })
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
    
     
        let updateinfo = {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          imageUrl: this.state.imageUrl,
          gpa: this.state.gpa,
          campusId: this.state.campusId,
          id: window.location.pathname.slice(-1)
      };
         await this.props.editStudent(updateinfo);
        this.setState({
            firstname: "", 
            lastname: "", 
            email: "",
            imageUrl: "",
            gpa: 0,
            campusId: null, 
            redirect: true, 
            redirectId: window.location.pathname.slice(-1)
          });
        
      };
//       // Unmount when the component is being removed from the DOM:
  componentWillUnmount() { 
    this.setState({redirect: false, redirectId: null});
}   
    render() {
    // Redirect to all Studentes's page after submit
    if(this.state.redirect) {
      return (<Redirect to={`/student/${this.state.redirectId}`}/>)
    }

    // Display the input form via the corresponding View component
    return (
      <div>
        <Header />
        <EditStudentView 
          fetchStudent={this.props.fetchStudent}
          editStudent={this.props.editStudent}
          student={this.props.student} 
          handleChange = {this.handleChange} 
          handleSubmit={this.handleSubmit}      
        />
      </div>          
    );
  }
}
// The following 2 input arguments are passed to the "connect" function used by "StudentContainer" component to connect to Redux Store.
// 1. The "mapState" argument specifies the data from Redux Store that the component needs.
// The "mapState" is called when the Store State changes, and it returns a data object of "Student".
const mapState = (state) => {
  return {
    student: state.student};
};
// The following input argument is passed to the "connect" function used by "NewStudentContainer" component to connect to Redux Store.
// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
    return({
      fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
      editStudent:  (student) => dispatch(editStudentThunk(student)),
    })
}
export default connect(mapState, mapDispatch)(EditStudentContainer);