/*==================================================
CampusView.js
The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
    const { campus } = props;
    const { deleteCampus } = props;

    let noStudent = () => {
        if (campus.students.length === 0) {
            return (
                <div>
                    <h3>No Students enrolled</h3>
                </div>
            );
        }
    };
    let image = (college) => {
        if (college.imageUrl !== "No URL provided") {
          return (
            <img src={college.imageUrl} alt="Campus" width="500" height="300"/>
          );
        }
      }
    // Render a single Campus view with list of its students
    return (
        <div>
            <h1>{campus.name}</h1>
            {image(campus)}
            <p>{campus.address}</p>
            <p>{campus.description}</p>
            <div>
                <Link to={`/campuses`}>
                    <button onClick={() => deleteCampus(campus.id)}>
                        Delete Campus
                    </button>
                </Link>
                <Link to={`/editcampus/${campus.id}`}>
                    <button>Edit Campus</button>
                </Link>
            </div>
            {noStudent()}
            {campus.students.map((student) => {
                let name = student.firstname + " " + student.lastname;
                return (
                    <div key={student.id}>
                        <Link to={`/student/${student.id}`}>
                            <h2>{name}</h2>
                        </Link>
                    </div>
                );
            })}
            <Link to={`/newstudent`}>
                <button>Add New Student</button>
            </Link>
        </div>
    );
};

export default CampusView;