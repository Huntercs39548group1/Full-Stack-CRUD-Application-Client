/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
const StudentView = (props) => {
  const { student } = props;
  console.log({student})

  // Render a single Student view 
  return (
    <div>
      <h1>{student?.firstname + " " + student?.lastname}</h1>
      <img src={student.imageUrl} alt="image" width="200" />
      <h2>Email: {student.email}</h2>
      <h4>GPA: {student.gpa}</h4>
      <h3>{student?.campus?.name}</h3>
    </div>
  );

};

export default StudentView;