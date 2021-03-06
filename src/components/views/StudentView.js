/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";

const StudentView = (props) => {
    const { student, deleteStudent } = props;

    let college = () => {
        if (student.campusId === null) {
            return <h3>Not enrolled in any campus</h3>;
        } else {
            return (
                <h3>
                    Enrolled in{" "}
                    <Link to={`/campus/${student.campus.id}`}>
                        {student.campus.name}
                    </Link>
                </h3>
            );
        }
    };

    let images = () => {
        if (student.imageUrl !== "No URL provided") {
            return <img src={student.imageUrl} alt="student" width="200" />;
        }
    };

    // Render a single Student view
    return (
        <div>
            <h1>{student?.firstname + " " + student?.lastname}</h1>
            {images()}
            <h2>Email: {student.email}</h2>
            <h4>GPA: {student.gpa}</h4>
            {college()}

            <Link to={`/students`}>
                <button onClick={() => deleteStudent(student.id)}>
                    Delete
                </button>
            </Link>
            {<Link to={`/editstudent/${student.id}`}><button>Edit Student
        </button></Link>}
        </div>
    );
};

export default StudentView;
