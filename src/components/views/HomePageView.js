/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const HomePageView = () => {
  // Render Home page view
  return (
    <div >
      <h1>Home Page</h1>

      <h1 class="header">View Campuses
      <br>
      </br>
      <Link to={'/campuses'}>
      <Button variant="contained" color="black">
        Clink Here!
      </Button>
    </Link>
    <br></br><br></br>
    <img src="https://img.freepik.com/free-vector/hand-draw-city-skyline-sketch_1035-19581.jpg?w=2000" alt="campuses" width="150" height="100"/>
    </h1>

    <h1 class="header">View Students
    <br></br>
    <Link to={'/students'}>
    <Button variant="contained" color="black">
      Clink Here!
    </Button>
  </Link>
  <br></br><br></br>
  <img src="https://pic.onlinewebfonts.com/svg/img_150030.png" alt="students" width="150" height="100"/>
  
  </h1>
    </div>
  );    
}

export default HomePageView;