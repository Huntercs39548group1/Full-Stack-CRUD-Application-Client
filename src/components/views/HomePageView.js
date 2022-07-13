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

      <h1 class="header">
      
      <Link to={'/campuses'}>
      <Button variant="contained" color="black" size='large' fullWidth=" ">
      View Campuses
      </Button>
      <br></br>
      <img src="https://img.freepik.com/free-vector/hand-draw-city-skyline-sketch_1035-19581.jpg?w=2000"width="250" height="210"/>  
    </Link>
 </h1>

    <h1 class="header">
    
    <Link to={'/students'}>
    <Button variant="contained" color="black" size='large' fullWidth=" ">
    View Students    </Button>
    <br></br><br></br>
    <img src="https://pic.onlinewebfonts.com/svg/img_150030.png"width="150" height="100"/>
    
  </Link>

  </h1>
    </div>
  );    
}

export default HomePageView;