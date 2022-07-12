import { Link } from "react-router-dom";

/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
const StudentView = (props) => {
  const { student } = props;

  // Render a single Student view 
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
       <h3><Link to={`/campus/:id`}>{student.campus.name}</Link></h3>
    </div>
  );

};

export default StudentView;
