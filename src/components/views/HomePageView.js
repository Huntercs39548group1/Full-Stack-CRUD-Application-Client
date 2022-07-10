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
      <br></br>
      <Link to={'/campuses'}>
      <Button variant="contained" color="black">
        Clink Here!
      </Button>
    </Link></h1>

    <h1 class="header">View Students
    <br></br>
    <Link to={'/students'}>
    <Button variant="contained" color="black">
      Clink Here!
    </Button>
  </Link></h1>
    </div>
  );    
}

export default HomePageView;