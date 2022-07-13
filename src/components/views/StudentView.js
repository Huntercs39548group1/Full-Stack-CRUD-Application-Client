/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
const StudentView = (props) => {
  const { student } = props;
  console.log({student})

  let college = () => {
    if (student.campusId === null) {
      return (
        <h3>Not enrolled in any campus</h3>
      );
    }
    else {
      return (
        <h3>Enrolled in {student.campus.name}</h3>
      );
    }
  }

  let images = () => {
    if (student.imageUrl !== "No URL provided") {
      return (
        <img src={student.imageUrl} alt="student" width="200" />
      );
    }
  }

  // Render a single Student view 
  return (
    <div>
      <h1>{student?.firstname + " " + student?.lastname}</h1>
      {images()}
      <h2>Email: {student.email}</h2>
      <h4>GPA: {student.gpa}</h4>
      {college()}
    </div>
  );

};

export default StudentView;