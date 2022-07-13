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
import { editCampusThunk } from '../../store/thunks';
import { EditCampusView } from '../views';
import { fetchCampusThunk } from "../../store/thunks";

// import {editCampus} from '../store/actions/actionCreators.js';

class EditCampusContainer extends Component {
   // Get the specific campus data from back-end database
  
    //Get Data from database
    constructor(props){
      super(props);
      this.state = {
        name: "", 
        imageUrl: "https://img.freepik.com/free-vector/hand-draw-city-skyline-sketch_1035-19581.jpg?w=2000",
        address: "",
        description: null,
        redirect: false, 
        redirectId: null,
        id: null
      };
  }
  componentDidMount() {
    // Get campus ID from URL (API link)
    this.props.fetchCampus(window.location.pathname.slice(-1));
        this.setState({
      name: this.props.campus.name,
      imageUrl:this.props.campus.imageUrl,
      address: this.props.campus.address,
      description: this.props.campus.description,
      redirect: false, 
      redirectId: null,
      id: this.props.campus.id
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
              name: this.state.name,
              address: this.state.address,
              description: this.state.description,
              imageUrl: this.state.imageURL,
              id: window.location.pathname.slice(-1)
          };
        await this.props.editCampus(updateinfo);
         this.setState({
            name:"",
            imageUrl: "https://img.freepik.com/free-vector/hand-draw-city-skyline-sketch_1035-19581.jpg?w=2000",
            address: null,
          description: null,
          redirect: true, 
          redirectId: window.location.pathname.slice(-1)
          });
        
      };
//       // Unmount when the component is being removed from the DOM:
  componentWillUnmount() { 
    this.setState({redirect: false, redirectId: null});
}   
    render() {
    // Redirect to all campuses's page after submit
    if(this.state.redirect) {
      return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
    }

    // Display the input form via the corresponding View component
    return (
      <div>
        <Header />
        <EditCampusView 
        fetchCampus={this.props.fetchCampus}
        editCampus={this.props.editCampus}  
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
    campus: state.campus};
};
// The following input argument is passed to the "connect" function used by "NewStudentContainer" component to connect to Redux Store.
// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
    return({
      fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
      editCampus:  (campus) => dispatch(editCampusThunk(campus)),
    })
}
export default connect(mapState, mapDispatch)(EditCampusContainer);